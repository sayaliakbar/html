# Week 7 Quiz: Media and Embedding

Test your knowledge of HTML media and embedding techniques covered in Week 7. Answer the following questions to check your understanding.

## Multiple Choice Questions

1. **Which attribute is used with the `<img>` element to provide text alternatives for users who cannot see the image?**

   - A) `title`
   - B) `alt`
   - C) `description`
   - D) `caption`

2. **Which of the following is the correct HTML5 element for playing audio files?**

   - A) `<sound>`
   - B) `<audio>`
   - C) `<mp3>`
   - D) `<music>`

3. **What is the purpose of the `srcset` attribute in the `<img>` element?**

   - A) To specify multiple image sources for different screen resolutions
   - B) To provide a fallback source if the main source fails
   - C) To create an image slideshow
   - D) To specify the source of the image

4. **Which attribute should be used with an iframe to prevent security vulnerabilities?**

   - A) `protected`
   - B) `secure`
   - C) `sandbox`
   - D) `safe-mode`

5. **What is the purpose of the `<figure>` element?**

   - A) To create figures and charts
   - B) To contain images only
   - C) To display mathematical equations
   - D) To contain self-contained content, often with a caption

6. **Which HTML5 element is used to add captions/subtitles to videos?**

   - A) `<caption>`
   - B) `<subtitle>`
   - C) `<track>`
   - D) `<text>`

7. **What does the `loading="lazy"` attribute do when added to an image?**

   - A) Reduces the quality of the image for faster loading
   - B) Defers loading of images until they near the viewport
   - C) Makes the image load with a fade-in effect
   - D) Loads the image at a random time

8. **Which of the following is the most appropriate for implementing different image crops for different screen sizes?**
   - A) Using CSS media queries
   - B) The `<picture>` element with multiple `<source>` elements
   - C) Multiple `<img>` elements with display conditions
   - D) The `srcset` attribute with the `sizes` attribute

## True or False

9. **The `<video>` element requires a closing tag, even when empty.**

   - True
   - False

10. **The `poster` attribute in the `<video>` element specifies an image to show while the video is downloading.**

    - True
    - False

11. **You can legally embed any YouTube video on your website without permission.**

    - True
    - False

12. **The `<iframe>` element is always secure by default.**
    - True
    - False

## Short Answer Questions

13. **Explain the difference between using the `srcset` attribute and the `<picture>` element for responsive images. When would you use each?**

14. **List and explain three important accessibility considerations when adding media (images, audio, video) to a web page.**

15. **What security risks are associated with embedding content using iframes, and how can these risks be mitigated?**

## Answer Key

(For instructor use only)

1. B
2. B
3. A
4. C
5. D
6. C
7. B
8. B
9. True
10. True
11. False (YouTube's terms of service allow embedding, but there are restrictions and exceptions)
12. False (iframes can pose security risks if not properly configured)
13. The `srcset` attribute is primarily for resolution switching (same image in different sizes for different viewport sizes or pixel densities). The `<picture>` element is more for art direction, allowing completely different images or crops for different viewport sizes. Use `srcset` when you simply need different resolutions of the same image, and use `<picture>` when you need to show different images or crops based on viewport size.
14. Three important accessibility considerations: 1) Providing alternative text for images that describes the content and function of the image; 2) Including captions, transcripts, or audio descriptions for video and audio content; 3) Ensuring media controls are keyboard accessible and labeled appropriately for screen readers. Additional considerations include respecting user preferences for reduced motion and ensuring sufficient color contrast.
15. Security risks with iframes include: 1) Cross-site scripting (XSS) attacks if the embedded content contains malicious code; 2) Clickjacking attacks where transparent iframes overlay clickable elements; 3) Data leakage between your site and the embedded content. These risks can be mitigated by: using the sandbox attribute to restrict capabilities, implementing proper Content Security Policy headers, only embedding content from trusted sources, using the allow attribute to control features, and adding the referrerpolicy attribute to control information passed to the embedded site.

## Contact

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)
