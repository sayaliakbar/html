# Week 12 Project: PWA Weather Application

## Project Overview

For this final project, you will build a Progressive Web Application (PWA) that displays weather information. This project will demonstrate your understanding of PWA features including offline functionality, installability, and responsive design.

## Requirements

### Functional Requirements

1. **Weather Data Display**

   - Show current weather conditions for a location
   - Display a 5-day forecast
   - Include temperature, humidity, wind speed, and conditions
   - Allow users to search for locations by city name

2. **PWA Features**

   - Implement a Service Worker for offline functionality
   - Create a Web App Manifest for installability
   - Use Cache API to store weather data and assets
   - Support push notifications for weather alerts
   - Ensure the app works offline after the first load

3. **User Interface**
   - Create a responsive design that works on mobile and desktop
   - Include appropriate loading states and error handling
   - Use weather icons to represent different conditions
   - Implement a clean, intuitive interface

## Implementation Requirements

1. **File Structure**

   - Create a folder named `weather-pwa`
   - Organize code into logical folders (css, js, images, icons)
   - Include all necessary files for PWA functionality

2. **Service Worker**

   - Register a service worker in your main JavaScript file
   - Implement appropriate caching strategies for different resources
   - Handle offline scenarios gracefully

3. **Web App Manifest**

   - Create a complete manifest.json file
   - Include icons in various sizes
   - Set appropriate display mode and theme colors

4. **Responsive Design**

   - Use CSS media queries for different viewport sizes
   - Ensure touch targets are appropriately sized for mobile
   - Test on multiple device sizes

5. **Weather API Integration**
   - Use a free weather API (like OpenWeatherMap, WeatherAPI, etc.)
   - Handle API requests and responses properly
   - Implement error handling for API failures

## Example Features

- Location-based weather using the Geolocation API
- Weather alert notifications
- Ability to save favorite locations
- Unit conversion (Celsius/Fahrenheit)
- Visualization of weather data using charts or graphs
- Dark/light mode toggle based on current weather or time of day

## Steps to Complete

1. Set up your project structure and files
2. Register a service worker and implement basic caching
3. Create the Web App Manifest
4. Build the UI components for weather display
5. Integrate with a weather API
6. Implement offline functionality
7. Add push notification capability
8. Test on various devices and in offline mode
9. Fix any issues and optimize performance

## Evaluation Criteria

Your project will be evaluated on the following:

1. **Functionality** - Does the application work as expected?
2. **PWA Implementation** - Are service workers, caching, and manifest properly implemented?
3. **Code Quality** - Is the code well-organized, commented, and maintainable?
4. **User Experience** - Is the application intuitive and responsive?
5. **Design** - Is the interface visually appealing and appropriate for the content?
6. **Offline Support** - Does the application work properly when offline?

## Submission

Please submit:

1. A ZIP file containing your complete project
2. A README.md file with:
   - Instructions for running the application
   - List of implemented features
   - Any external resources or APIs used
   - Screenshots of the application

## Resources

- [MDN PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google PWA Training](https://web.dev/learn/pwa/)
- [Free Weather APIs](https://rapidapi.com/category/Weather)
- [Service Worker Cookbook](https://serviceworke.rs/)
