# Week 11 Quiz: Web Accessibility

Test your knowledge of web accessibility principles and practices covered this week. Choose the best answer for each question.

## WCAG Guidelines and Principles

1. **What does WCAG stand for?**

   - A. Web Content Accessibility Group
   - B. Web Content Accessibility Guidelines
   - C. Web Compliance Accessibility Guidelines
   - D. Website Content Access Guidelines

2. **Which of the following is NOT one of the four main principles of WCAG?**

   - A. Perceivable
   - B. Operable
   - C. Comprehensive
   - D. Robust

3. **Which WCAG conformance level is commonly required by accessibility laws in many countries?**

   - A. Level A
   - B. Level AA
   - C. Level AAA
   - D. Level AB

4. **According to WCAG, what minimum contrast ratio is required between text and background for normal text to meet Level AA compliance?**
   - A. 3:1
   - B. 4.5:1
   - C. 7:1
   - D. 2:1

## Semantic HTML

5. **Which of the following is the most semantically appropriate element for the main content area of a webpage?**

   - A. `<div class="main">`
   - B. `<content>`
   - C. `<main>`
   - D. `<section id="main">`

6. **What is the primary benefit of using semantic HTML elements?**

   - A. They make the code look cleaner
   - B. They provide meaning and structure to assistive technologies
   - C. They load faster in modern browsers
   - D. They use less memory than non-semantic elements

7. **Which of these is the most appropriate way to mark up a navigation menu?**

   - A. `<div class="navigation"><ul>...</ul></div>`
   - B. `<navigation><ul>...</ul></navigation>`
   - C. `<nav><ul>...</ul></nav>`
   - D. `<menu><ul>...</ul></menu>`

8. **What is the correct way to provide a caption for a complex image like a chart?**
   - A. Add detailed information in the `alt` attribute
   - B. Use the `<caption>` element within an `<img>`
   - C. Use `<figure>` and `<figcaption>` elements
   - D. Add a paragraph with a class of "caption" after the image

## WAI-ARIA

9. **When should you use ARIA roles and attributes?**

   - A. Always, on every element for maximum accessibility
   - B. Only when native HTML elements don't provide the semantics or behavior needed
   - C. Only on interactive elements like buttons and links
   - D. Never, since modern browsers handle accessibility automatically

10. **What is the purpose of the `aria-live` attribute?**

    - A. To make an element respond faster to user interactions
    - B. To inform screen readers of dynamic content changes
    - C. To ensure content stays visible during page scrolling
    - D. To prevent elements from being modified by scripts

11. **Which ARIA attribute would you use to indicate that a form field is required?**

    - A. `aria-required="true"`
    - B. `aria-mandatory="true"`
    - C. `aria-needed="true"`
    - D. `aria-essential="true"`

12. **What is the role of `aria-labelledby`?**
    - A. To add a tooltip to an element
    - B. To identify an element that labels the current element
    - C. To indicate that an element should be labeled by screen readers
    - D. To create a visible label for a form control

## Keyboard Accessibility

13. **Which of these keyboard users should NOT be able to reach?**

    - A. Links
    - B. Buttons
    - C. Decorative images with empty alt text
    - D. Form controls

14. **What is the main purpose of a "skip link"?**

    - A. To skip over broken links on a webpage
    - B. To allow keyboard users to bypass navigation and go directly to main content
    - C. To skip loading heavy resources for faster page loading
    - D. To allow users to skip mandatory form fields

15. **When implementing a custom button using a `<div>` or similar element, what must you add to make it keyboard accessible?**

    - A. `role="clickable"`
    - B. `<div onclick="..."`
    - C. `tabindex="0"` and keyboard event handling
    - D. `keyboard-access="true"`

16. **What is the recommended value for `tabindex` to include an element in the natural tab order?**
    - A. `tabindex="1"`
    - B. `tabindex="0"`
    - C. `tabindex="auto"`
    - D. `tabindex="normal"`

## Visual Accessibility

17. **Why should you not rely solely on color to convey information?**

    - A. Because colors can look different on various displays
    - B. Because some users have color blindness or visual impairments
    - C. Because colors can have different cultural meanings
    - D. Because users might have custom color schemes in their browsers

18. **What is the purpose of the `alt` attribute for images?**

    - A. To provide a fallback if the image fails to load
    - B. To provide a text alternative for users who cannot see the image
    - C. To optimize images for search engines
    - D. To add a caption that appears when hovering over the image

19. **For a purely decorative image that adds no meaningful content, what should the `alt` attribute contain?**

    - A. A brief description of the image
    - B. "Decorative image"
    - C. Empty string (`alt=""`)
    - D. You should omit the alt attribute entirely

20. **Which of the following would help a user with motion sensitivity?**
    - A. Higher contrast colors
    - B. Reduced motion/animation options
    - C. Larger text
    - D. Audio descriptions

## Answer Key (for instructor use)

1. B
2. C
3. B
4. B
5. C
6. B
7. C
8. C
9. B
10. B
11. A
12. B
13. C
14. B
15. C
16. B
17. B
18. B
19. C
20. B
