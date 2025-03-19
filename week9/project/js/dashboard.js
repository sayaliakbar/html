// Main Dashboard JavaScript

// DOM Elements
const settingsToggle = document.getElementById("settings-toggle");
const closeSettings = document.getElementById("close-settings");
const settingsPanel = document.getElementById("settings-panel");
const themeSelector = document.getElementById("theme-selector");
const animationSpeed = document.getElementById("animation-speed");
const showStats = document.getElementById("show-stats");
const resetSettings = document.getElementById("reset-settings");
const statsWidget = document.getElementById("stats-widget");
const chartTypeBtns = document.querySelectorAll(".chart-type-btn");

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", function () {
  // Load saved preferences
  loadPreferences();

  // Initialize charts
  initCharts();

  // Event listeners
  settingsToggle.addEventListener("click", toggleSettings);
  closeSettings.addEventListener("click", toggleSettings);
  themeSelector.addEventListener("change", savePreferences);
  animationSpeed.addEventListener("change", savePreferences);
  showStats.addEventListener("change", toggleStatsWidget);
  resetSettings.addEventListener("click", resetPreferences);

  // Setup chart type buttons
  chartTypeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      changeChartType(this.getAttribute("data-type"));
    });
  });
});

// Toggle settings panel
function toggleSettings() {
  settingsPanel.classList.toggle("open");
}

// Save user preferences
function savePreferences() {
  const preferences = {
    theme: themeSelector.value,
    animationSpeed: animationSpeed.value,
    showStats: showStats.checked,
  };

  localStorage.setItem("dashboardPreferences", JSON.stringify(preferences));
  applyPreferences(preferences);
}

// Load saved preferences
function loadPreferences() {
  let preferences;

  try {
    preferences = JSON.parse(localStorage.getItem("dashboardPreferences"));
  } catch (e) {
    preferences = null;
  }

  if (!preferences) {
    // Default preferences
    preferences = {
      theme: "light",
      animationSpeed: 1000,
      showStats: true,
    };
  }

  // Apply to form elements
  themeSelector.value = preferences.theme;
  animationSpeed.value = preferences.animationSpeed;
  showStats.checked = preferences.showStats;

  // Apply to UI
  applyPreferences(preferences);
}

// Apply preferences to the UI
function applyPreferences(prefs) {
  // Apply theme
  document.body.className = "";
  if (prefs.theme !== "light") {
    document.body.classList.add(`${prefs.theme}-theme`);
  }

  // Apply animation speed
  window.chartAnimationDuration = parseInt(prefs.animationSpeed);

  // Toggle stats widget
  toggleStatsWidget();
}

// Reset preferences to defaults
function resetPreferences() {
  localStorage.removeItem("dashboardPreferences");
  loadPreferences();
}

// Toggle stats widget visibility
function toggleStatsWidget() {
  statsWidget.style.display = showStats.checked ? "block" : "none";
  savePreferences();
}

// Change active chart type
function changeChartType(type) {
  chartTypeBtns.forEach((btn) => {
    if (btn.getAttribute("data-type") === type) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  updateChart(type);
}
