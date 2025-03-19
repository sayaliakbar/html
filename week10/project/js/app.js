// Main application script for the Interactive Product Showcase

// Sample product data
const sampleProducts = [
  {
    id: "p1",
    name: "Wireless Headphones",
    price: 129.99,
    category: "electronics",
    rating: 4.5,
    features: ["wireless", "noise-cancelling", "bluetooth"],
    inStock: true,
    onSale: true,
    featured: true,
    image: "https://via.placeholder.com/300?text=Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals alike.",
  },
  {
    id: "p2",
    name: "Running Shoes",
    price: 89.99,
    category: "sportswear",
    rating: 4.2,
    features: ["lightweight", "waterproof", "cushioned"],
    inStock: true,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=Running+Shoes",
    description:
      "Professional running shoes with advanced cushioning technology and breathable materials. Designed for both track and trail running.",
  },
  {
    id: "p3",
    name: "Bluetooth Speaker",
    price: 79.99,
    category: "electronics",
    rating: 3.8,
    features: ["bluetooth", "waterproof", "portable"],
    inStock: true,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=BT+Speaker",
    description:
      "Portable Bluetooth speaker with 360-degree sound and IPX7 waterproof rating. Perfect for outdoor adventures.",
  },
  {
    id: "p4",
    name: "Cotton T-Shirt",
    price: 19.99,
    category: "clothing",
    rating: 4.0,
    features: ["soft", "lightweight", "breathable"],
    inStock: true,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=T-Shirt",
    description:
      "100% organic cotton t-shirt with a comfortable fit. Available in multiple colors and sizes.",
  },
  {
    id: "p5",
    name: "Smart Watch",
    price: 199.99,
    category: "electronics",
    rating: 4.7,
    features: ["wireless", "fitness-tracking", "bluetooth"],
    inStock: true,
    onSale: true,
    featured: true,
    image: "https://via.placeholder.com/300?text=Smart+Watch",
    description:
      "Advanced smartwatch with fitness tracking, heart rate monitoring, and GPS. Syncs with all major smartphone platforms.",
  },
  {
    id: "p6",
    name: "Denim Jeans",
    price: 59.99,
    category: "clothing",
    rating: 4.1,
    features: ["durable", "stretchy", "classic"],
    inStock: true,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=Denim+Jeans",
    description:
      "Classic fit denim jeans with stretch technology for comfort. Durable construction for long-lasting wear.",
  },
  {
    id: "p7",
    name: "JavaScript Book",
    price: 29.99,
    category: "books",
    rating: 4.8,
    features: ["beginner-friendly", "comprehensive", "practical"],
    inStock: true,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=JS+Book",
    description:
      "Comprehensive guide to JavaScript programming with practical examples and exercises. Suitable for beginners and intermediate developers.",
  },
  {
    id: "p8",
    name: "Fitness Tracker",
    price: 49.99,
    category: "electronics",
    rating: 3.9,
    features: ["wireless", "waterproof", "fitness-tracking"],
    inStock: true,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=Fitness+Tracker",
    description:
      "Affordable fitness tracker with heart rate monitoring, step counting, and sleep analysis. Water resistant for swimming.",
  },
  {
    id: "p9",
    name: "Yoga Mat",
    price: 24.99,
    category: "sportswear",
    rating: 4.3,
    features: ["non-slip", "lightweight", "eco-friendly"],
    inStock: false,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=Yoga+Mat",
    description:
      "Eco-friendly non-slip yoga mat made from sustainable materials. Perfect thickness for joint protection during practice.",
  },
  {
    id: "p10",
    name: "4K Monitor",
    price: 299.99,
    category: "electronics",
    rating: 4.6,
    features: ["4k-resolution", "hdr", "adjustable-stand"],
    inStock: true,
    onSale: true,
    featured: false,
    image: "https://via.placeholder.com/300?text=4K+Monitor",
    description:
      "Ultra-high definition 4K monitor with HDR support. Ergonomic stand with height, tilt, and rotation adjustments.",
  },
  {
    id: "p11",
    name: "Designer Backpack",
    price: 79.99,
    category: "clothing",
    rating: 4.4,
    features: ["waterproof", "lightweight", "laptop-compartment"],
    inStock: true,
    onSale: false,
    featured: false,
    image: "https://via.placeholder.com/300?text=Backpack",
    description:
      "Stylish yet functional backpack with padded laptop compartment and multiple organization pockets. Water-resistant material.",
  },
  {
    id: "p12",
    name: "Web Development Course",
    price: 149.99,
    category: "books",
    rating: 4.9,
    features: ["comprehensive", "practical", "certificate"],
    inStock: true,
    onSale: false,
    featured: true,
    image: "https://via.placeholder.com/300?text=Web+Dev+Course",
    description:
      "Complete web development bootcamp covering HTML, CSS, JavaScript, and modern frameworks. Includes certificate of completion.",
  },
];

// Main app initialization
document.addEventListener("DOMContentLoaded", () => {
  // Load products into the grid
  loadProducts();

  // Initialize drag and drop functionality
  window.dragDropModule.initDragDrop();

  // Initialize filter system
  window.filtersModule.initFilters();

  // Setup event listeners for custom components
  setupComponentEvents();
});

// Load products into the product grid
function loadProducts() {
  const productGrid = document.getElementById("product-grid");

  // Clear any existing products
  productGrid.innerHTML = "";

  // Add each product
  sampleProducts.forEach((product) => {
    // Create product-card custom element
    const productCard = document.createElement("product-card");

    // Set attributes from product data
    productCard.setAttribute("product-id", product.id);
    productCard.setAttribute("name", product.name);
    productCard.setAttribute("price", `$${product.price.toFixed(2)}`);
    productCard.setAttribute("image", product.image);
    productCard.setAttribute("category", product.category);
    productCard.setAttribute("rating", product.rating);
    productCard.setAttribute("in-stock", product.inStock);
    productCard.setAttribute("on-sale", product.onSale);
    productCard.setAttribute("featured", product.featured);
    productCard.setAttribute("description", product.description);

    // Set features as a comma-separated string
    if (product.features && product.features.length > 0) {
      productCard.setAttribute("features", product.features.join(","));
    }

    // Add to the grid
    productGrid.appendChild(productCard);
  });
}

// Setup event listeners for custom components
function setupComponentEvents() {
  // Listen for add to cart events from product cards
  document.addEventListener("add-to-cart", (event) => {
    window.dragDropModule.addToCart(event.detail);
  });

  // Listen for add to compare events from product cards
  document.addEventListener("add-to-compare", (event) => {
    window.dragDropModule.addToComparison(event.detail);
  });

  // Listen for show product details events
  document.addEventListener("show-product-details", (event) => {
    showProductModal(event.detail);
  });

  // Setup product modal
  setupProductModal();
}

// Show product details in modal
function showProductModal(productData) {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.open(productData);
  }
}

// Setup product modal
function setupProductModal() {
  // The modal is already set up via the ProductModal class
  // This function can be extended if we need additional modal setup
}

// Filter products by category (for quick filter buttons or links)
function filterByCategory(category) {
  window.filtersModule.filterByAttribute("category", category);
}

// Filter products by feature (for quick filter buttons or tags)
function filterByFeature(feature) {
  window.filtersModule.filterByAttribute("feature", feature);
}

// Add new product (for admin functionality, not implemented in demo)
function addNewProduct(product) {
  // This would validate and add a new product in a real application
  sampleProducts.push(product);
  loadProducts();
  window.filtersModule.applyFilters();
}

// Get product by ID
function getProductById(productId) {
  return sampleProducts.find((product) => product.id === productId);
}

// Export functions for potential use in external scripts or console debugging
window.productShowcase = {
  loadProducts,
  filterByCategory,
  filterByFeature,
  getProductById,
  addNewProduct,
  products: sampleProducts,
};
