// Product filtering functionality for the Interactive Product Showcase

// DOM Elements
const productGrid = document.getElementById("product-grid");
const clearFiltersBtn = document.getElementById("clear-filters");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");

// Active filters state
let activeFilters = {
  categories: [],
  minRating: 0,
  maxPrice: 200,
  features: [],
  inStock: true,
};

// Initialize filtering system
function initFilters() {
  // Set up filter change event listeners
  setupFilterListeners();

  // Set up price range slider
  setupPriceRangeSlider();

  // Set up clear filters button
  clearFiltersBtn.addEventListener("click", clearAllFilters);
}

// Setup event listeners for filter controls
function setupFilterListeners() {
  // Category checkboxes
  const categoryCheckboxes = document.querySelectorAll(
    '[data-filter="category"]'
  );
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateCategoryFilters();
      applyFilters();
    });
  });

  // Rating radio buttons
  const ratingRadios = document.querySelectorAll('[data-filter="rating"]');
  ratingRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      updateRatingFilter();
      applyFilters();
    });
  });

  // Feature checkboxes
  const featureCheckboxes = document.querySelectorAll(
    '[data-filter="feature"]'
  );
  featureCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateFeatureFilters();
      applyFilters();
    });
  });

  // In stock checkbox
  const inStockCheckbox = document.querySelector('[data-filter="inStock"]');
  if (inStockCheckbox) {
    inStockCheckbox.addEventListener("change", () => {
      activeFilters.inStock = inStockCheckbox.checked;
      applyFilters();
    });
  }
}

// Set up price range slider
function setupPriceRangeSlider() {
  if (priceRange) {
    // Update price value display when slider changes
    priceRange.addEventListener("input", () => {
      const value = priceRange.value;
      priceValue.textContent = `$${value}`;
      activeFilters.maxPrice = parseInt(value);
      applyFilters();
    });

    // Initialize with current value
    priceValue.textContent = `$${priceRange.value}`;
    activeFilters.maxPrice = parseInt(priceRange.value);
  }
}

// Update category filters based on checkboxes
function updateCategoryFilters() {
  const checkedCategories = document.querySelectorAll(
    '[data-filter="category"]:checked'
  );
  activeFilters.categories = Array.from(checkedCategories).map(
    (checkbox) => checkbox.value
  );
}

// Update rating filter based on radio button
function updateRatingFilter() {
  const checkedRating = document.querySelector(
    '[data-filter="rating"]:checked'
  );
  activeFilters.minRating = checkedRating ? parseInt(checkedRating.value) : 0;
}

// Update feature filters based on checkboxes
function updateFeatureFilters() {
  const checkedFeatures = document.querySelectorAll(
    '[data-filter="feature"]:checked'
  );
  activeFilters.features = Array.from(checkedFeatures).map(
    (checkbox) => checkbox.value
  );
}

// Apply filters to products
function applyFilters() {
  const products = document.querySelectorAll("product-card");

  products.forEach((product) => {
    const shouldDisplay = shouldDisplayProduct(product);
    product.style.display = shouldDisplay ? "block" : "none";
  });

  // Show message if no products match filters
  checkForEmptyResults(products);
}

// Determine if a product should be displayed
function shouldDisplayProduct(product) {
  // Category filter
  if (activeFilters.categories.length > 0) {
    const category = product.getAttribute("category");
    if (!activeFilters.categories.includes(category)) {
      return false;
    }
  }

  // Rating filter
  if (activeFilters.minRating > 0) {
    const rating = parseFloat(product.getAttribute("rating") || 0);
    if (rating < activeFilters.minRating) {
      return false;
    }
  }

  // Price filter
  const price = parseFloat(
    product.getAttribute("price")?.replace("$", "") || 0
  );
  if (price > activeFilters.maxPrice) {
    return false;
  }

  // Features filter
  if (activeFilters.features.length > 0) {
    const productFeatures = (product.getAttribute("features") || "")
      .split(",")
      .map((f) => f.trim().toLowerCase());
    // Check if product has at least one of the selected features
    if (
      !activeFilters.features.some((feature) =>
        productFeatures.includes(feature)
      )
    ) {
      return false;
    }
  }

  // In stock filter
  if (activeFilters.inStock) {
    const inStock = product.getAttribute("in-stock") !== "false";
    if (!inStock) {
      return false;
    }
  }

  // All filters passed
  return true;
}

// Check if any products match filters, show message if none
function checkForEmptyResults(products) {
  let visibleCount = 0;

  products.forEach((product) => {
    if (product.style.display !== "none") {
      visibleCount++;
    }
  });

  // Get or create "no results" message
  let noResultsMsg = document.getElementById("no-results-message");

  if (visibleCount === 0) {
    if (!noResultsMsg) {
      noResultsMsg = document.createElement("div");
      noResultsMsg.id = "no-results-message";
      noResultsMsg.style.padding = "20px";
      noResultsMsg.style.textAlign = "center";
      noResultsMsg.style.width = "100%";
      noResultsMsg.innerHTML = `
                <h3>No products match your filters</h3>
                <p>Try adjusting your filter criteria or <button id="clear-filters-inline">clear all filters</button></p>
            `;
      productGrid.appendChild(noResultsMsg);

      // Add event listener to inline clear button
      document
        .getElementById("clear-filters-inline")
        .addEventListener("click", clearAllFilters);
    }
  } else if (noResultsMsg) {
    noResultsMsg.remove();
  }
}

// Clear all active filters
function clearAllFilters() {
  // Reset category checkboxes
  document.querySelectorAll('[data-filter="category"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Reset rating radio buttons
  document.querySelectorAll('[data-filter="rating"]').forEach((radio) => {
    radio.checked = false;
  });

  // Reset feature checkboxes
  document.querySelectorAll('[data-filter="feature"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Reset in stock checkbox
  const inStockCheckbox = document.querySelector('[data-filter="inStock"]');
  if (inStockCheckbox) {
    inStockCheckbox.checked = true;
  }

  // Reset price range
  if (priceRange) {
    priceRange.value = priceRange.max;
    priceValue.textContent = `$${priceRange.value}`;
  }

  // Reset active filters object
  activeFilters = {
    categories: [],
    minRating: 0,
    maxPrice: parseInt(priceRange ? priceRange.max : 200),
    features: [],
    inStock: true,
  };

  // Apply the reset filters
  applyFilters();
}

// Filter products by a specific attribute value
function filterByAttribute(attribute, value) {
  // Special case for features which need array handling
  if (attribute === "feature") {
    activeFilters.features = [value];
    document.querySelectorAll('[data-filter="feature"]').forEach((checkbox) => {
      checkbox.checked = checkbox.value === value;
    });
  }
  // Handle categories
  else if (attribute === "category") {
    activeFilters.categories = [value];
    document
      .querySelectorAll('[data-filter="category"]')
      .forEach((checkbox) => {
        checkbox.checked = checkbox.value === value;
      });
  }

  applyFilters();
}

// Export functions for use in other scripts
window.filtersModule = {
  initFilters,
  applyFilters,
  filterByAttribute,
  clearAllFilters,
};
