// Geolocation functionality for the dashboard

// DOM Elements
const getWeatherBtn = document.getElementById("get-weather");
const refreshWeatherBtn = document.getElementById("refresh-weather");
const weatherContent = document.getElementById("weather-content");

// Initialize location features
document.addEventListener("DOMContentLoaded", function () {
  // Set up event listeners
  if (getWeatherBtn) {
    getWeatherBtn.addEventListener("click", getUserLocationAndWeather);
  }

  if (refreshWeatherBtn) {
    refreshWeatherBtn.addEventListener("click", refreshWeather);
  }

  // Check if we have cached weather data
  const cachedWeather = getFromLocalStorage("weatherData");
  if (cachedWeather && isWeatherDataFresh(cachedWeather)) {
    displayWeatherData(cachedWeather);
  }
});

// Get user location and weather
function getUserLocationAndWeather() {
  // Show loading state
  weatherContent.innerHTML = "<p>Getting your location...</p>";

  // Check if geolocation is supported
  if (!navigator.geolocation) {
    showLocationError("Geolocation is not supported by your browser.");
    return;
  }

  // Request user location
  navigator.geolocation.getCurrentPosition(
    // Success callback
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      weatherContent.innerHTML = "<p>Getting weather for your location...</p>";

      // Get weather data for the location
      fetchWeatherData(latitude, longitude);
    },
    // Error callback
    (error) => {
      handleLocationError(error);
    },
    // Options
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
}

// Fetch weather data from a mock API (in a real app, you'd use a real weather API)
function fetchWeatherData(latitude, longitude) {
  // In a real app, you'd make an API call to a weather service
  // For this example, we'll generate mock data

  // Simulate API call delay
  setTimeout(() => {
    // Generate random weather data based on location
    const weatherData = generateMockWeatherData(latitude, longitude);

    // Save to localStorage for caching
    weatherData.timestamp = Date.now();
    saveToLocalStorage("weatherData", weatherData);

    // Display the weather data
    displayWeatherData(weatherData);
  }, 1000);
}

// Generate mock weather data
function generateMockWeatherData(latitude, longitude) {
  // Round coordinates to make them more readable
  const lat = Math.round(latitude * 1000) / 1000;
  const lon = Math.round(longitude * 1000) / 1000;

  // Get location name based on coordinates (in a real app, you'd use reverse geocoding)
  const locationName = getLocationNameFromCoordinates(lat, lon);

  // Generate random temperature between -10 and 40°C
  const temperature = Math.round((Math.random() * 50 - 10) * 10) / 10;

  // Random condition from list
  const conditions = [
    "Sunny",
    "Partly Cloudy",
    "Cloudy",
    "Rainy",
    "Thunderstorm",
    "Snowy",
    "Foggy",
    "Windy",
  ];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];

  // Random humidity
  const humidity = Math.round(Math.random() * 100);

  // Random wind speed 0-30 km/h
  const windSpeed = Math.round(Math.random() * 30 * 10) / 10;

  return {
    location: locationName,
    coordinates: { latitude: lat, longitude: lon },
    temperature: temperature,
    condition: condition,
    humidity: humidity,
    windSpeed: windSpeed,
    lastUpdated: new Date().toLocaleTimeString(),
  };
}

// Mock function to get location name from coordinates
function getLocationNameFromCoordinates(latitude, longitude) {
  // In a real app, you'd use reverse geocoding API
  // For this demo, we'll just return coordinates as the location name
  return `Location at ${latitude}, ${longitude}`;
}

// Display weather data in the UI
function displayWeatherData(data) {
  // Create weather display HTML
  const weatherHTML = `
    <div class="weather-data">
      <h3>${data.location}</h3>
      <div class="weather-main">
        <span class="temperature">${data.temperature}°C</span>
        <span class="condition">${data.condition}</span>
      </div>
      <div class="weather-details">
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind: ${data.windSpeed} km/h</p>
      </div>
      <p class="last-updated">Last updated: ${data.lastUpdated}</p>
    </div>
  `;

  // Update the weather widget
  weatherContent.innerHTML = weatherHTML;
}

// Refresh weather data
function refreshWeather() {
  const cachedWeather = getFromLocalStorage("weatherData");

  if (cachedWeather && cachedWeather.coordinates) {
    const { latitude, longitude } = cachedWeather.coordinates;

    // Show loading message
    weatherContent.innerHTML = "<p>Refreshing weather data...</p>";

    // Fetch fresh weather data
    fetchWeatherData(latitude, longitude);
  } else {
    // If no cached coordinates, request location again
    getUserLocationAndWeather();
  }
}

// Handle location errors
function handleLocationError(error) {
  let errorMessage = "";

  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage = "You denied the request for geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      errorMessage = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
    default:
      errorMessage =
        "An unknown error occurred when trying to get your location.";
      break;
  }

  showLocationError(errorMessage);
}

// Show location error in the UI
function showLocationError(message) {
  weatherContent.innerHTML = `
    <div class="error-message">
      <p>${message}</p>
      <p>Try again or enter a location manually:</p>
      <input type="text" id="manual-location" placeholder="Enter city name">
      <button id="search-location">Search</button>
    </div>
  `;

  // Add event listener for manual location search
  const searchBtn = document.getElementById("search-location");
  if (searchBtn) {
    searchBtn.addEventListener("click", handleManualLocationSearch);
  }
}

// Handle manual location search
function handleManualLocationSearch() {
  const locationInput = document.getElementById("manual-location");
  const location = locationInput.value.trim();

  if (location) {
    weatherContent.innerHTML = `<p>Getting weather for ${location}...</p>`;

    // In a real app, you'd geocode this location name to coordinates
    // For this example, we'll generate random coordinates
    const latitude = Math.random() * 180 - 90;
    const longitude = Math.random() * 360 - 180;

    fetchWeatherData(latitude, longitude);
  }
}

// Check if weather data is fresh (less than 30 minutes old)
function isWeatherDataFresh(weatherData) {
  if (!weatherData.timestamp) return false;

  const now = Date.now();
  const thirtyMinutesInMs = 30 * 60 * 1000;

  return now - weatherData.timestamp < thirtyMinutesInMs;
}

// Calculate distance between two sets of coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
  // Earth radius in kilometers
  const R = 6371;

  // Convert latitude and longitude from degrees to radians
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  // Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  return Math.round(distance * 100) / 100;
}

// Export functions for use in other scripts
window.locationModule = {
  getUserLocation: getUserLocationAndWeather,
  refreshWeather,
  calculateDistance,
};
