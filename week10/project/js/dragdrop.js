// Drag and Drop functionality for the Interactive Product Showcase

// DOM Elements
const productGrid = document.getElementById("product-grid");
const cartDropZone = document.getElementById("cart-drop-zone");
const cartItems = document.getElementById("cart-items");
const cartTotalAmount = document.getElementById("cart-total-amount");
const comparisonBar = document.getElementById("comparison-bar");
const comparisonItems = document.getElementById("comparison-items");
const compareBtn = document.getElementById("compare-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Cart state
let cart = [];
let comparisonList = [];

// Initialize drag and drop functionality
function initDragDrop() {
  // Listen for products being added to the grid
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        setupDraggableProducts();
      }
    });
  });

  // Start observing the product grid
  observer.observe(productGrid, { childList: true });

  // Setup initial products if any are already present
  setupDraggableProducts();

  // Setup the cart drop zone
  setupCartDropZone();

  // Setup comparison drop zone
  setupComparisonDropZone();
}

// Setup draggable behavior for products
function setupDraggableProducts() {
  const productCards = document.querySelectorAll("product-card");

  productCards.forEach((card) => {
    // Access the shadow root to get the draggable element
    const draggableCard = card.shadowRoot.querySelector(".product-card");

    if (!draggableCard.hasAttribute("data-drag-initialized")) {
      draggableCard.setAttribute("data-drag-initialized", "true");

      draggableCard.addEventListener("dragstart", (e) => {
        // Get product data from the custom element attributes
        const productId = card.getAttribute("product-id");
        const name = card.getAttribute("name");
        const price = card.getAttribute("price");
        const image = card.getAttribute("image");
        const inStock = card.getAttribute("in-stock") !== "false";

        // Only allow dragging if in stock
        if (!inStock) {
          e.preventDefault();
          return;
        }

        // Store product data in the drag operation
        const productData = JSON.stringify({ productId, name, price, image });
        e.dataTransfer.setData("application/json", productData);

        // Set the drag image (optional)
        if (draggableCard.querySelector(".product-image img")) {
          const img = draggableCard.querySelector(".product-image img");
          e.dataTransfer.setDragImage(img, 0, 0);
        }

        // Add dragging class for visual feedback
        draggableCard.classList.add("dragging");

        // Allow both copy and move operations
        e.dataTransfer.effectAllowed = "copyMove";
      });

      draggableCard.addEventListener("dragend", (e) => {
        // Remove dragging class
        draggableCard.classList.remove("dragging");
      });
    }
  });
}

// Setup cart drop zone
function setupCartDropZone() {
  cartDropZone.addEventListener("dragover", (e) => {
    // Prevent default to allow drop
    e.preventDefault();

    // Set the drop effect to copy (not move)
    e.dataTransfer.dropEffect = "copy";

    // Add active class for visual feedback
    cartDropZone.classList.add("active");
  });

  cartDropZone.addEventListener("dragleave", (e) => {
    // Remove active class when drag leaves the zone
    cartDropZone.classList.remove("active");
  });

  cartDropZone.addEventListener("drop", (e) => {
    // Prevent default action
    e.preventDefault();

    // Remove active class
    cartDropZone.classList.remove("active");

    // Get the dropped data
    const productData = JSON.parse(e.dataTransfer.getData("application/json"));

    // Add product to cart
    addToCart(productData);
  });

  // Show items in cart if there are any saved in localStorage
  loadCart();
}

// Setup comparison drop zone
function setupComparisonDropZone() {
  comparisonBar.addEventListener("dragover", (e) => {
    // Prevent default to allow drop
    e.preventDefault();

    // Set the drop effect to copy
    e.dataTransfer.dropEffect = "copy";
  });

  comparisonBar.addEventListener("drop", (e) => {
    // Prevent default action
    e.preventDefault();

    // Get the dropped data
    const productData = JSON.parse(e.dataTransfer.getData("application/json"));

    // Add product to comparison
    addToComparison(productData);
  });

  // Setup close comparison button
  document.getElementById("close-comparison").addEventListener("click", () => {
    comparisonBar.classList.remove("active");
    comparisonList = [];
    updateComparisonUI();
  });
}

// Add product to cart
function addToCart(product) {
  // Check if product is already in cart
  const existingProduct = cart.find(
    (item) => item.productId === product.productId
  );

  if (existingProduct) {
    // Increase quantity if product is already in cart
    existingProduct.quantity += 1;
  } else {
    // Add new product with quantity 1
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  // Update cart UI
  updateCartUI();

  // Save cart to localStorage
  saveCart();

  // Show notification
  showNotification(`${product.name} added to cart!`);
}

// Update cart UI
function updateCartUI() {
  // Show cart items if there are any, otherwise show empty message
  if (cart.length > 0) {
    cartItems.style.display = "block";
    document.querySelector(".empty-cart-message").style.display = "none";

    // Enable checkout and clear cart buttons
    checkoutBtn.disabled = false;
    clearCartBtn.disabled = false;

    // Clear existing items
    cartItems.innerHTML = "";

    // Add items to cart UI
    cart.forEach((item) => {
      // Use the cart item template
      const template = document.getElementById("cart-item-template");
      const cartItemElement = document.importNode(template.content, true);

      // Set item details
      cartItemElement.querySelector(".cart-item-image").src = item.image;
      cartItemElement.querySelector(".cart-item-image").alt = item.name;
      cartItemElement.querySelector(".cart-item-name").textContent = item.name;
      cartItemElement.querySelector(".cart-item-price").textContent =
        item.price;
      cartItemElement.querySelector(".quantity-value").textContent =
        item.quantity;

      // Set data-product-id on the cart item
      const cartItemContainer = cartItemElement.querySelector(".cart-item");
      cartItemContainer.dataset.productId = item.productId;

      // Add event listeners for quantity controls
      cartItemElement
        .querySelector(".quantity-decrease")
        .addEventListener("click", () => {
          updateCartItemQuantity(item.productId, -1);
        });

      cartItemElement
        .querySelector(".quantity-increase")
        .addEventListener("click", () => {
          updateCartItemQuantity(item.productId, 1);
        });

      cartItemElement
        .querySelector(".remove-item-btn")
        .addEventListener("click", () => {
          removeFromCart(item.productId);
        });

      // Append to cart
      cartItems.appendChild(cartItemElement);
    });

    // Update cart count badge
    updateCartCountBadge();

    // Calculate and display total
    calculateCartTotal();
  } else {
    // Show empty cart message
    cartItems.style.display = "none";
    document.querySelector(".empty-cart-message").style.display = "block";

    // Disable checkout and clear cart buttons
    checkoutBtn.disabled = true;
    clearCartBtn.disabled = true;

    // Update cart count badge
    updateCartCountBadge();

    // Reset total
    cartTotalAmount.textContent = "$0.00";
  }
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
  const productIndex = cart.findIndex((item) => item.productId === productId);

  if (productIndex !== -1) {
    // Update quantity, ensuring it doesn't go below 1
    cart[productIndex].quantity = Math.max(
      1,
      cart[productIndex].quantity + change
    );

    // Update UI
    updateCartUI();

    // Save cart
    saveCart();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);

  // Update UI
  updateCartUI();

  // Save cart
  saveCart();
}

// Calculate cart total
function calculateCartTotal() {
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  cartTotalAmount.textContent = `$${total.toFixed(2)}`;
}

// Update cart count badge
function updateCartCountBadge() {
  const cartCount = document.querySelector(".cart-count");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCount.textContent = totalItems;

  // Make badge visible only if there are items
  if (totalItems > 0) {
    cartCount.style.display = "flex";
  } else {
    cartCount.style.display = "none";
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
  try {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      cart = JSON.parse(savedCart);
      updateCartUI();
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
  }
}

// Clear cart
function clearCart() {
  cart = [];
  updateCartUI();
  saveCart();
}

// Add product to comparison
function addToComparison(product) {
  // Check if already in comparison list
  const isInList = comparisonList.some(
    (item) => item.productId === product.productId
  );

  if (!isInList) {
    // Add to comparison list (limit to 4 items)
    if (comparisonList.length < 4) {
      comparisonList.push(product);
      updateComparisonUI();

      // Show comparison bar if it's not already visible
      if (!comparisonBar.classList.contains("active")) {
        comparisonBar.classList.add("active");
      }
    } else {
      showNotification("You can only compare up to 4 products at a time.");
    }
  } else {
    showNotification("This product is already in your comparison list.");
  }
}

// Update comparison UI
function updateComparisonUI() {
  // Clear existing items
  comparisonItems.innerHTML = "";

  // Add items to comparison UI
  comparisonList.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("comparison-item");
    itemElement.dataset.productId = item.productId;

    itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <button class="remove-comparison-item" data-id="${item.productId}">×</button>
        `;

    comparisonItems.appendChild(itemElement);

    // Add event listener to remove button
    itemElement
      .querySelector(".remove-comparison-item")
      .addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        removeFromComparison(productId);
      });
  });

  // Enable or disable compare button based on number of items
  compareBtn.disabled = comparisonList.length < 2;

  // Hide comparison bar if empty
  if (comparisonList.length === 0) {
    comparisonBar.classList.remove("active");
  }
}

// Remove from comparison
function removeFromComparison(productId) {
  comparisonList = comparisonList.filter(
    (item) => item.productId !== productId
  );
  updateComparisonUI();
}

// Show notification
function showNotification(message) {
  // Create notification element if it doesn't exist
  let notification = document.getElementById("notification");
  if (!notification) {
    notification = document.createElement("div");
    notification.id = "notification";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "rgba(76, 175, 80, 0.9)";
    notification.style.color = "white";
    notification.style.padding = "12px 20px";
    notification.style.borderRadius = "4px";
    notification.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
    notification.style.zIndex = "1000";
    notification.style.transition = "opacity 0.3s ease";
    document.body.appendChild(notification);
  }

  // Set message and show notification
  notification.textContent = message;
  notification.style.opacity = "1";

  // Hide after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
  }, 3000);
}

// Event listener for clear cart button
clearCartBtn.addEventListener("click", clearCart);

// Event listener for checkout button
checkoutBtn.addEventListener("click", () => {
  alert(
    "Checkout functionality would be implemented here in a real application."
  );
});

// Event listener for compare button
compareBtn.addEventListener("click", () => {
  alert("Product comparison table would be shown here in a real application.");
});

// Export functions for use in other scripts
window.dragDropModule = {
  initDragDrop,
  addToCart,
  addToComparison,
};
