# Week 10 Quiz: Interactive HTML

Test your knowledge of the interactive HTML features covered this week. Choose the best answer for each question.

## Drag and Drop API

1. **Which attribute makes an HTML element draggable?**

   - A. `data-draggable="true"`
   - B. `draggable="true"`
   - C. `drag="enabled"`
   - D. `movable="true"`

2. **In which event should you call `event.preventDefault()` to allow dropping?**

   - A. `dragstart`
   - B. `dragenter`
   - C. `dragover`
   - D. `drop`

3. **Which method is used to store data during a drag operation?**

   - A. `event.dragData.set()`
   - B. `event.dataTransfer.setData()`
   - C. `event.setDragData()`
   - D. `event.data.store()`

4. **Which event fires when a drag operation is complete, regardless of whether it was successful?**
   - A. `dragend`
   - B. `drop`
   - C. `dragcomplete`
   - D. `dragleave`

## Web Components

5. **What is the purpose of Shadow DOM in Web Components?**

   - A. To add visual shadow effects to components
   - B. To encapsulate DOM and CSS, isolating them from the main document
   - C. To create efficient DOM rendering with less memory usage
   - D. To provide backwards compatibility with older browsers

6. **How do you create a custom HTML element?**

   - A. `document.registerElement('custom-element', CustomElement);`
   - B. `window.defineElement('custom-element', CustomElement);`
   - C. `customElements.define('custom-element', CustomElement);`
   - D. `HTML.defineCustomElement('custom-element', CustomElement);`

7. **What must a custom element's name include?**

   - A. At least one uppercase letter
   - B. A namespace prefix
   - C. A hyphen (dash)
   - D. An underscore character

8. **Which lifecycle callback is invoked when a custom element is added to the DOM?**
   - A. `initCallback()`
   - B. `mountedCallback()`
   - C. `connectedCallback()`
   - D. `renderCallback()`

## Custom Data Attributes

9. **What is the correct format for a custom data attribute?**

   - A. `custom-data="value"`
   - B. `data="custom-value"`
   - C. `data-custom="value"`
   - D. `custom="data-value"`

10. **How do you access a data attribute named `data-user-id` with JavaScript?**

    - A. `element.data.userId`
    - B. `element.dataset.userId`
    - C. `element.getAttribute('data-user-id')`
    - D. Both B and C are correct

11. **What is NOT a valid use case for data attributes?**

    - A. Storing configuration information for a component
    - B. Storing user credentials and sensitive information
    - C. Associating metadata with elements for JavaScript operations
    - D. Storing state information for UI elements

12. **What happens when you assign a number to a data attribute?**
    - A. It's stored as a number and retrieved as a number
    - B. It's converted to a string when stored and retrieved as a string
    - C. It causes an error because only strings are allowed
    - D. It's stored as a number but retrieved as a string

## Advanced Attribute Selectors

13. **Which CSS selector targets elements where the attribute value contains a specific word as part of a space-separated list?**

    - A. `[attr*="value"]`
    - B. `[attr~="value"]`
    - C. `[attr^="value"]`
    - D. `[attr$="value"]`

14. **Which selector matches all links to PDF documents?**

    - A. `a[href="pdf"]`
    - B. `a[href*="pdf"]`
    - C. `a[href$=".pdf"]`
    - D. `a[href^="pdf"]`

15. **To select all required inputs, which CSS selector would you use?**

    - A. `input.required`
    - B. `input[required="true"]`
    - C. `input:required`
    - D. `input[required]`

16. **How would you make an attribute selector case-insensitive?**
    - A. Add `ignorecase` after the selector
    - B. Add `i` after the closing bracket
    - C. Use the `.toLowerCase()` method in the selector
    - D. Attribute selectors are case-insensitive by default

## Practical Integration

17. **Which combination of technologies would be best for creating a drag-and-drop file uploader with a custom UI?**

    - A. Web Components and Custom Data Attributes
    - B. Drag and Drop API and Web Components
    - C. Custom Data Attributes and CSS Attribute Selectors
    - D. Drag and Drop API and Custom Data Attributes

18. **What's the best approach for creating reusable UI components that need to be styled differently in different contexts?**

    - A. Using inline styles with JavaScript variables
    - B. Creating global CSS classes for each variation
    - C. Using Web Components with Shadow DOM and CSS custom properties
    - D. Using Custom Elements without Shadow DOM

19. **When implementing drag and drop functionality between custom components, what's the recommended approach?**

    - A. Handle drag events in the parent container only
    - B. Let each component handle its own drag events, but communicate through a central service
    - C. Use custom events to notify other components about drag operations
    - D. Store drag state in data attributes and let CSS handle visual changes

20. **What approach should you use to style elements based on dynamic state changes?**
    - A. Add/remove classes that correspond to the states
    - B. Modify inline styles directly with JavaScript
    - C. Update data attributes and use attribute selectors in CSS
    - D. Both A and C are appropriate approaches

## Answer Key (for instructor use)

1. B
2. C
3. B
4. A
5. B
6. C
7. C
8. C
9. C
10. D
11. B
12. B
13. B
14. C
15. D
16. B
17. B
18. C
19. C
20. D
