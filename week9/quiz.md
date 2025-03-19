# Week 9 Quiz: Advanced HTML5 Features

Test your knowledge of the advanced HTML5 features covered this week. Choose the best answer for each question.

## Canvas API

1. **Which method is used to obtain a drawing context for a canvas element?**

   - A. `canvas.createContext('2d')`
   - B. `canvas.getContext('2d')`
   - C. `canvas.drawContext('2d')`
   - D. `canvas.setContext('2d')`

2. **What is the correct way to draw a filled rectangle on a canvas?**

   - A. `ctx.rectangle(10, 10, 100, 50, 'blue');`
   - B. `ctx.fillStyle = 'blue'; ctx.drawRect(10, 10, 100, 50);`
   - C. `ctx.fillStyle = 'blue'; ctx.fillRect(10, 10, 100, 50);`
   - D. `ctx.fillColor = 'blue'; ctx.rect(10, 10, 100, 50);`

3. **Which of the following is NOT a property of the 2D drawing context?**

   - A. `fillStyle`
   - B. `strokeStyle`
   - C. `lineWidth`
   - D. `pixelColor`

4. **What is the recommended method for creating animations with canvas?**
   - A. `setInterval()`
   - B. `setTimeout()`
   - C. `requestAnimationFrame()`
   - D. `animationLoop()`

## SVG

5. **Which of the following is true about SVG compared to Canvas?**

   - A. SVG is pixel-based while Canvas is vector-based
   - B. SVG elements remain in the DOM and can be manipulated
   - C. SVG offers better performance for complex animations with many elements
   - D. SVG requires JavaScript to draw shapes

6. **What is the correct way to define a circle in SVG?**

   - A. `<circle x="50" y="50" radius="25" fill="red" />`
   - B. `<circle center-x="50" center-y="50" r="25" fill="red" />`
   - C. `<circle cx="50" cy="50" r="25" fill="red" />`
   - D. `<circle pos="50,50" radius="25" color="red" />`

7. **Which attribute is used to make an SVG graphic scale proportionally?**

   - A. `scale="proportional"`
   - B. `preserveAspectRatio="xMidYMid meet"`
   - C. `responsive="true"`
   - D. `maintain-ratio="true"`

8. **What is the purpose of the `<g>` element in SVG?**
   - A. To create gradients
   - B. To group multiple SVG elements
   - C. To generate automatic shapes
   - D. To define grid layouts

## Web Storage

9. **What is the difference between localStorage and sessionStorage?**

   - A. localStorage is encrypted, sessionStorage is not
   - B. localStorage persists after the browser is closed, sessionStorage does not
   - C. localStorage has no size limit, sessionStorage is limited to 5MB
   - D. localStorage is only available on secure origins, sessionStorage works everywhere

10. **How do you store an object in localStorage?**

    - A. `localStorage.setItem('user', {name: 'John', age: 25});`
    - B. `localStorage.user = {name: 'John', age: 25};`
    - C. `localStorage.setItem('user', JSON.stringify({name: 'John', age: 25}));`
    - D. `localStorage.setObject('user', {name: 'John', age: 25});`

11. **What happens if you try to store more data than the browser's storage limit allows?**

    - A. The browser automatically compresses the data
    - B. The oldest data is automatically deleted
    - C. The browser throws a quota exceeded error
    - D. The data is automatically stored in IndexedDB instead

12. **Which event fires when localStorage is modified in another browser window?**
    - A. `change`
    - B. `update`
    - C. `storageupdate`
    - D. `storage`

## Geolocation API

13. **What permission is required to use the Geolocation API?**

    - A. No permission is required
    - B. User permission is required each time
    - C. User permission is required once per domain
    - D. Administrative permissions are required on the device

14. **Which method is used for continuous location tracking?**

    - A. `navigator.geolocation.trackPosition()`
    - B. `navigator.geolocation.watchPosition()`
    - C. `navigator.geolocation.monitorPosition()`
    - D. `navigator.geolocation.followPosition()`

15. **Which of the following is NOT a property of the position coordinates object?**

    - A. `latitude`
    - B. `longitude`
    - C. `direction`
    - D. `altitude`

16. **What does the `enableHighAccuracy` option do in the Geolocation API?**
    - A. It forces the device to use GPS instead of Wi-Fi positioning
    - B. It requests the most accurate position possible, potentially using more power
    - C. It enables altitude tracking
    - D. It allows for sub-meter accuracy on all devices

## Practical Applications

17. **Which combination of HTML5 features would be most appropriate for creating a weather app that shows the local forecast?**

    - A. Canvas and localStorage
    - B. SVG and sessionStorage
    - C. Geolocation and Web Storage
    - D. Web Workers and IndexedDB

18. **For an interactive data visualization that needs to handle user clicks on specific elements, which technology is more suitable?**

    - A. Canvas
    - B. SVG
    - C. WebGL
    - D. CSS animations

19. **Which statement is TRUE regarding offline web application capabilities?**

    - A. Web Storage alone is sufficient for creating fully featured offline applications
    - B. localStorage is automatically synchronized with the server when online
    - C. Web Storage can be used to store UI state and user preferences when offline
    - D. sessionStorage persists when the application is used offline

20. **What security restriction applies to the Geolocation API?**
    - A. It can only be used on pages served over HTTPS or localhost
    - B. It requires a paid API key from Google
    - C. It only works on mobile devices
    - D. It requires the page to have a valid SSL certificate

## Answer Key (for instructor use)

1. B
2. C
3. D
4. C
5. B
6. C
7. B
8. B
9. B
10. C
11. C
12. D
13. C
14. B
15. C
16. B
17. C
18. B
19. C
20. A
