# Week 7 Project: Media Gallery

## Project Overview

For this week's project, you will create an interactive media gallery that showcases various types of media content (images, audio, video) and embedded content. This project will demonstrate your understanding of HTML media elements and embedding techniques.

## Requirements

Your media gallery project should include:

1. **Image Gallery:**

   - Display at least 6 images using responsive image techniques
   - Implement both `<picture>` element and `srcset`/`sizes` approaches
   - Include proper alt text for all images
   - Apply lazy loading to improve performance
   - Group images into categories or themes

2. **Audio and Video Content:**

   - Add at least 2 video elements with multiple format sources
   - Add at least 2 audio elements with multiple format sources
   - Include appropriate controls for all media
   - Implement captions or transcripts for accessibility
   - Style media players to match the gallery design

3. **Embedded Content:**

   - Embed at least 3 different types of external content (maps, social media posts, videos, etc.)
   - Ensure all embedded content is responsive
   - Implement proper security attributes for iframes
   - Provide fallback content where appropriate
   - Include attribution for all embedded content

4. **Accessibility Features:**

   - Provide captions for all videos
   - Include transcripts for audio content
   - Ensure all media controls are keyboard accessible
   - Add appropriate ARIA attributes where needed
   - Respect user preferences for reduced motion

5. **Gallery Organization:**
   - Create a navigation system to browse different media types
   - Implement filtering or sorting functionality
   - Include metadata for each media item (title, description, source)
   - Ensure logical tabbing order throughout the gallery
   - Create a responsive layout that works on different screen sizes

## Implementation Requirements

1. **File Structure:**

   - Create a file named `gallery.html` in this project folder
   - Create an `assets` folder to store your media files
   - Organize media files into appropriate subfolders (images, audio, video)

2. **HTML Structure:**

   - Use semantic HTML throughout the project
   - Properly structure gallery sections
   - Include appropriate heading hierarchy
   - Add descriptive comments explaining implementation details

3. **Media Optimization:**

   - Optimize all images for web use
   - Provide multiple formats and resolutions for video and audio
   - Implement lazy loading for performance
   - Consider bandwidth and performance implications

4. **Visual Design:**
   - Create a cohesive and appealing gallery design
   - Ensure adequate spacing between gallery items
   - Use consistent styling across different media types
   - Make the gallery navigation intuitive

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Media Gallery</title>
    <style>
      /* Basic styles for gallery layout */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }

      .gallery-nav {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;
      }

      .gallery-nav button {
        padding: 10px 15px;
        background: #f0f0f0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      .gallery-nav button.active {
        background: #4f9bf8;
        color: white;
      }

      .gallery-section {
        margin-bottom: 40px;
      }

      .media-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
      }

      .media-item {
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow: hidden;
      }

      .media-item img,
      .media-item video {
        max-width: 100%;
        height: auto;
        display: block;
      }

      .media-info {
        padding: 15px;
      }

      .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
      }

      .embed-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Interactive Media Gallery</h1>
      <p>Explore our collection of images, videos, audio, and more</p>
    </header>

    <nav class="gallery-nav">
      <button class="active" data-target="all">All</button>
      <button data-target="images">Images</button>
      <button data-target="videos">Videos</button>
      <button data-target="audio">Audio</button>
      <button data-target="embeds">Embeds</button>
    </nav>

    <main>
      <!-- Images Section -->
      <section id="images" class="gallery-section">
        <h2>Image Gallery</h2>
        <div class="media-grid">
          <!-- Example of a responsive image item -->
          <article class="media-item">
            <picture>
              <source
                media="(min-width: 1000px)"
                srcset="assets/images/large/image1.jpg"
              />
              <source
                media="(min-width: 600px)"
                srcset="assets/images/medium/image1.jpg"
              />
              <img
                src="assets/images/small/image1.jpg"
                alt="Description of image"
                loading="lazy"
              />
            </picture>
            <div class="media-info">
              <h3>Image Title</h3>
              <p>Image description goes here...</p>
            </div>
          </article>
          <!-- More image items... -->
        </div>
      </section>

      <!-- Additional sections for video, audio, and embeds... -->
    </main>

    <footer>
      <p>&copy; 2025 Media Gallery. All rights reserved.</p>
      <p>All media used with appropriate permissions.</p>
    </footer>
  </body>
</html>
```

## Evaluation Criteria

Your project will be evaluated on:

1. Proper implementation of responsive images and media elements
2. Accessibility of media content
3. Performance optimization techniques
4. Quality and organization of the gallery interface
5. Proper attribution and ethical use of media
6. HTML code quality and structure

## Additional Challenges (Optional)

For an extra challenge, try implementing:

1. A lightbox view for images
2. Custom video and audio player controls
3. Dynamic loading of additional gallery items
4. Advanced filtering options
5. Client-side image format detection and serving

## Submission

When you've completed your project:

1. Validate your HTML code
2. Test your gallery in multiple browsers
3. Verify that all media loads properly
4. Check accessibility using browser dev tools
5. Be prepared to discuss your implementation choices

## Contact

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)
