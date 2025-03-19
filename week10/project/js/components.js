// Web Components for the Interactive Product Showcase

// Filter Control Component
class FilterControl extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create component structure
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "filter-control");

    // Title section with toggle
    const header = document.createElement("div");
    header.setAttribute("class", "filter-header");

    const title = document.createElement("h3");
    title.textContent = this.getAttribute("title") || "Filter";

    const toggleBtn = document.createElement("button");
    toggleBtn.setAttribute("class", "toggle-btn");
    toggleBtn.textContent = "−";
    toggleBtn.addEventListener("click", () => this.toggleContent());

    header.appendChild(title);
    header.appendChild(toggleBtn);

    // Content section
    const content = document.createElement("div");
    content.setAttribute("class", "filter-content");

    // Slot for options
    const slot = document.createElement("slot");
    slot.setAttribute("name", "options");
    content.appendChild(slot);

    // Apply styles
    const style = document.createElement("style");
    style.textContent = `
      .filter-control {
        margin-bottom: 15px;
      }
      
      .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
      }
      
      .filter-header h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
      }
      
      .toggle-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #666;
        transition: transform 0.3s ease;
      }
      
      .filter-content {
        transition: max-height 0.3s ease;
        overflow: hidden;
        max-height: 500px;
      }
      
      .filter-content.collapsed {
        max-height: 0;
      }
      
      :host {
        display: block;
        margin-bottom: 15px;
      }
    `;

    // Append elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(header);
    wrapper.appendChild(content);

    // Store elements for later use
    this.content = content;
    this.toggleBtn = toggleBtn;

    // Add event listener for the header
    header.addEventListener("click", (event) => {
      // Only toggle if the header itself or the h3 is clicked
      if (event.target === header || event.target === title) {
        this.toggleContent();
      }
    });
  }

  // Method to toggle filter content visibility
  toggleContent() {
    if (this.content.classList.contains("collapsed")) {
      this.content.classList.remove("collapsed");
      this.toggleBtn.textContent = "−";
    } else {
      this.content.classList.add("collapsed");
      this.toggleBtn.textContent = "+";
    }
  }
}

// Product Card Component
class ProductCard extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Get template and clone content
    const template = document.getElementById("product-card-template");
    const content = template.content.cloneNode(true);

    // Get product data from attributes
    const name = this.getAttribute("name") || "Product Name";
    const price = this.getAttribute("price") || "$0.00";
    const image =
      this.getAttribute("image") || "https://via.placeholder.com/300";
    const rating = parseFloat(this.getAttribute("rating") || "0");
    const category = this.getAttribute("category") || "";
    const inStock = this.getAttribute("in-stock") !== "false";
    const featured = this.getAttribute("featured") === "true";
    const onSale = this.getAttribute("on-sale") === "true";
    const productId =
      this.getAttribute("product-id") ||
      `p${Math.random().toString(36).substring(2, 10)}`;

    // Features as a comma-separated list
    const features = (this.getAttribute("features") || "")
      .split(",")
      .filter((feature) => feature.trim().length > 0);

    // Set product card data attributes
    const productCard = content.querySelector(".product-card");
    productCard.dataset.productId = productId;
    productCard.dataset.category = category;
    productCard.dataset.price = price.replace("$", "");
    productCard.dataset.inStock = String(inStock);
    productCard.dataset.featured = String(featured);
    productCard.dataset.onSale = String(onSale);

    // Set product details
    content.querySelector(".product-name").textContent = name;
    content.querySelector(".product-price").textContent = price;

    // Set image
    const imgElement = content.querySelector(".product-image img");
    imgElement.src = image;
    imgElement.alt = name;

    // Add rating stars
    const ratingElement = content.querySelector(".product-rating");
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        ratingElement.innerHTML += "★";
      } else if (i === fullStars + 1 && hasHalfStar) {
        ratingElement.innerHTML += "½";
      } else {
        ratingElement.innerHTML += "☆";
      }
    }

    // Add features
    const featuresContainer = content.querySelector(".product-features");
    features.forEach((feature) => {
      const featureTag = document.createElement("span");
      featureTag.classList.add("feature-tag");
      featureTag.textContent = feature.trim();
      featureTag.dataset.feature = feature.trim().toLowerCase();
      featuresContainer.appendChild(featureTag);
    });

    // Add badges
    const badgeContainer = content.querySelector(".product-badges");

    if (onSale) {
      const saleBadge = document.createElement("span");
      saleBadge.classList.add("product-badge", "badge-sale");
      saleBadge.textContent = "SALE";
      badgeContainer.appendChild(saleBadge);
    }

    if (featured) {
      const featuredBadge = document.createElement("span");
      featuredBadge.classList.add("product-badge", "badge-featured");
      featuredBadge.textContent = "FEATURED";
      badgeContainer.appendChild(featuredBadge);
    }

    // Add button event listeners
    content.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (inStock) {
        this.addToCart(productId, name, price, image);
      }
    });

    content
      .querySelector(".add-to-compare-btn")
      .addEventListener("click", (e) => {
        e.stopPropagation();
        this.addToCompare(productId, name, price, image);
      });

    // Attach the new content
    this.shadowRoot.appendChild(content);

    // Make product card clickable
    productCard.addEventListener("click", () => {
      this.showProductDetails();
    });
  }

  // Method to dispatch add to cart event
  addToCart(productId, name, price, image) {
    const event = new CustomEvent("add-to-cart", {
      bubbles: true,
      composed: true,
      detail: { productId, name, price, image },
    });
    this.dispatchEvent(event);
  }

  // Method to dispatch add to compare event
  addToCompare(productId, name, price, image) {
    const event = new CustomEvent("add-to-compare", {
      bubbles: true,
      composed: true,
      detail: { productId, name, price, image },
    });
    this.dispatchEvent(event);
  }

  // Method to show product details modal
  showProductDetails() {
    const event = new CustomEvent("show-product-details", {
      bubbles: true,
      composed: true,
      detail: {
        productId: this.getAttribute("product-id"),
        name: this.getAttribute("name"),
        price: this.getAttribute("price"),
        image: this.getAttribute("image"),
        description:
          this.getAttribute("description") || "No description available.",
        category: this.getAttribute("category"),
        features: (this.getAttribute("features") || "")
          .split(",")
          .filter((feature) => feature.trim().length > 0),
      },
    });
    this.dispatchEvent(event);
  }
}

// Product Modal Component
class ProductModal extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create modal structure
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "modal-wrapper");

    // Content container
    const content = document.createElement("div");
    content.setAttribute("class", "modal-content");

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "modal-close");
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", () => this.close());

    // Header area for product title
    const header = document.createElement("div");
    header.setAttribute("class", "modal-header");

    const title = document.createElement("h2");
    title.setAttribute("class", "product-title");
    header.appendChild(title);

    // Product details
    const details = document.createElement("div");
    details.setAttribute("class", "product-details");

    // Add elements to the modal
    content.appendChild(closeBtn);
    content.appendChild(header);
    content.appendChild(details);
    wrapper.appendChild(content);

    // Apply styles
    const style = document.createElement("style");
    style.textContent = `
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      
      :host(.open) {
        display: flex;
      }
      
      .modal-wrapper {
        width: 90%;
        max-width: 700px;
        max-height: 90vh;
        overflow-y: auto;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
      
      .modal-content {
        position: relative;
        padding: 20px;
      }
      
      .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      
      .modal-close:hover {
        background-color: #f0f0f0;
      }
      
      .modal-header {
        margin-bottom: 20px;
      }
      
      .product-title {
        margin: 0;
        font-size: 1.5rem;
      }
      
      .product-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      
      .product-image-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .product-image {
        max-width: 100%;
        max-height: 300px;
        object-fit: contain;
      }
      
      .product-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      
      .product-price {
        font-size: 1.2rem;
        font-weight: bold;
        color: #3498db;
      }
      
      .product-category {
        font-size: 0.9rem;
        color: #666;
      }
      
      .product-description {
        margin-top: 10px;
        line-height: 1.5;
      }
      
      .product-features {
        margin-top: 15px;
      }
      
      .product-features h3 {
        margin-bottom: 10px;
        font-size: 1rem;
      }
      
      .feature-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        list-style: none;
        padding: 0;
      }
      
      .feature-item {
        background-color: #f0f0f0;
        padding: 5px 10px;
        border-radius: 3px;
        font-size: 0.9rem;
      }
      
      .add-to-cart-btn {
        background-color: #2ecc71;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 15px;
        font-size: 1rem;
      }
      
      .add-to-cart-btn:hover {
        background-color: #27ae60;
      }
      
      @media (max-width: 600px) {
        .product-details {
          grid-template-columns: 1fr;
        }
      }
    `;

    // Append elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    // Store elements for later use
    this.content = content;
    this.title = title;
    this.details = details;

    // Handle clicks outside the modal content
    this.addEventListener("click", (event) => {
      if (event.target === this) {
        this.close();
      }
    });

    // Handle ESC key to close modal
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.classList.contains("open")) {
        this.close();
      }
    });
  }

  // Open the modal with product details
  open(product) {
    // Set product title
    this.title.textContent = product.name;

    // Create product details structure
    this.details.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image">
      </div>
      <div class="product-info">
        <div class="product-price">${product.price}</div>
        <div class="product-category">Category: ${product.category}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-features">
          <h3>Features:</h3>
          <ul class="feature-list">
            ${product.features
              .map((feature) => `<li class="feature-item">${feature}</li>`)
              .join("")}
          </ul>
        </div>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    `;

    // Add event listener to Add to Cart button
    const addToCartBtn = this.details.querySelector(".add-to-cart-btn");
    addToCartBtn.addEventListener("click", () => {
      const event = new CustomEvent("add-to-cart", {
        bubbles: true,
        composed: true,
        detail: {
          productId: product.productId,
          name: product.name,
          price: product.price,
          image: product.image,
        },
      });
      this.dispatchEvent(event);
      this.close();
    });

    // Show the modal
    this.classList.add("open");
  }

  // Close the modal
  close() {
    this.classList.remove("open");
  }
}

// Register custom elements
customElements.define("filter-control", FilterControl);
customElements.define("product-card", ProductCard);
customElements.define("product-modal", ProductModal);
