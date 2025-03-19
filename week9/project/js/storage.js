// Storage functionality for the dashboard

// Save data to localStorage
function saveToLocalStorage(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    return false;
  }
}

// Get data from localStorage
function getFromLocalStorage(key, defaultValue = null) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return defaultValue;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return defaultValue;
  }
}

// Remove data from localStorage
function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("Error removing from localStorage:", error);
    return false;
  }
}

// Save dashboard widget layout
function saveWidgetLayout() {
  const widgets = document.querySelectorAll(".widget");
  const layoutData = Array.from(widgets).map((widget) => {
    const rect = widget.getBoundingClientRect();
    return {
      id: widget.id,
      x: widget.style.left || "0px",
      y: widget.style.top || "0px",
      width: widget.style.width || "auto",
      height: widget.style.height || "auto",
      order: widget.style.order || "0",
    };
  });

  saveToLocalStorage("dashboardLayout", layoutData);
}

// Load and apply saved widget layout
function loadWidgetLayout() {
  const layoutData = getFromLocalStorage("dashboardLayout");
  if (!layoutData) return false;

  layoutData.forEach((widgetData) => {
    const widget = document.getElementById(widgetData.id);
    if (widget) {
      if (widgetData.x) widget.style.left = widgetData.x;
      if (widgetData.y) widget.style.top = widgetData.y;
      if (widgetData.width) widget.style.width = widgetData.width;
      if (widgetData.height) widget.style.height = widgetData.height;
      if (widgetData.order) widget.style.order = widgetData.order;
    }
  });

  return true;
}

// Save user data to sessionStorage
function saveToSessionStorage(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    sessionStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error("Error saving to sessionStorage:", error);
    return false;
  }
}

// Get user data from sessionStorage
function getFromSessionStorage(key, defaultValue = null) {
  try {
    const serializedData = sessionStorage.getItem(key);
    if (serializedData === null) {
      return defaultValue;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error reading from sessionStorage:", error);
    return defaultValue;
  }
}

// Save widget specific settings
function saveWidgetSettings(widgetId, settings) {
  const allWidgetSettings = getFromLocalStorage("widgetSettings", {});
  allWidgetSettings[widgetId] = settings;
  saveToLocalStorage("widgetSettings", allWidgetSettings);
}

// Get widget specific settings
function getWidgetSettings(widgetId) {
  const allWidgetSettings = getFromLocalStorage("widgetSettings", {});
  return allWidgetSettings[widgetId] || null;
}

// Function to check storage availability
function isStorageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        e.name === "QuotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// Check if localStorage is available
const localStorageAvailable = isStorageAvailable("localStorage");
const sessionStorageAvailable = isStorageAvailable("sessionStorage");

// Display storage warning if not available
if (!localStorageAvailable) {
  console.warn(
    "localStorage is not available. User preferences will not be saved."
  );
}

if (!sessionStorageAvailable) {
  console.warn(
    "sessionStorage is not available. Temporary data will not be saved."
  );
}
