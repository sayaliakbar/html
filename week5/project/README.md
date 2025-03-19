# Week 5 Project: Blog Layout

## Project Overview

For this week's project, you will create a blog layout using HTML5 semantic elements. This project will allow you to practice using appropriate semantic elements to structure a blog website in a way that improves accessibility, SEO, and overall code quality.

## Requirements

Your blog layout project should include:

1. **Page Structure:**

   - Properly structured HTML5 document
   - Appropriate use of semantic elements throughout
   - Clear content hierarchy using proper heading levels

2. **Required Semantic Elements:**

   - `<header>` for the site header/banner area
   - `<nav>` for the navigation menu
   - `<main>` for the primary content
   - `<article>` for blog posts
   - `<section>` for grouping related content
   - `<aside>` for sidebar content
   - `<footer>` for the site footer
   - `<figure>` and `<figcaption>` for at least one image
   - `<time>` for publication dates
   - `<address>` for contact information

3. **Content Requirements:**

   - Blog title and site description
   - Navigation menu with at least 4 items
   - At least 2 complete blog posts with:
     - Post title
     - Publication date using the `<time>` element
     - Author information
     - Post content with paragraphs and at least one other element (list, image, quote, etc.)
     - Tags or categories for each post
   - Sidebar with at least 2 widget sections (related posts, categories, about, etc.)
   - Footer with copyright information and additional links

4. **Technical Requirements:**
   - Valid HTML5 code with proper semantic structure
   - Proper nesting of elements
   - HTML comments explaining your semantic choices
   - Internal page links between sections
   - Properly formatted code (indentation, spacing)

## Implementation Steps

1. **Planning:**

   - Sketch the blog layout structure
   - Identify the appropriate semantic elements for each section
   - Plan the content hierarchy

2. **Implementation:**

   - Create a file named `blog.html` in this project folder
   - Start with the basic HTML5 document structure
   - Build the site header with navigation
   - Add main content area with blog posts
   - Implement the sidebar with widgets
   - Create the site footer
   - Add appropriate attributes and comments

3. **Testing and Refinement:**
   - Validate your HTML
   - Check document outline
   - Ensure proper semantic nesting
   - Test all links

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Tech Blog</title>
</head>
<body>
    <!-- Site Header -->
    <header>
        <h1>My Tech Blog</h1>
        <p>Exploring the latest in web development and technology</p>

        <!-- Primary Navigation -->
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Area -->
    <main>
        <!-- Blog Post -->
        <article>
            <header>
                <h2>Getting Started with Semantic HTML</h2>
                <p>Published on <time datetime="2025-05-15">May 15, 2025</time> by <address>Jane Smith</address></p>
            </header>

            <section>
                <p>Main article content goes here...</p>

                <figure>
                    <img src="semantic-elements.jpg" alt="Diagram of semantic HTML elements">
                    <figcaption>Fig. 1: HTML5 semantic elements and their relationships</figcaption>
                </figure>
            </section>

            <footer>
                <p>Tags: HTML5, Semantics, Web Development</p>
            </footer>
        </article>

        <!-- Additional blog posts... -->
    </main>

    <!-- Sidebar -->
    <aside>
        <section>
            <h2>About the Author</h2>
            <p>Author information...</p>
        </section>

        <section>
            <h2>Popular Posts</h2>
            <ul>
                <li><a href="#">Post title 1</a></li>
                <li><a href="#">Post title 2</a></li>
            </ul>
        </section>
    </aside>

    <!-- Site Footer -->
    <footer>
        <p>&copy; 2025 My Tech Blog. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>
```

## Evaluation Criteria

Your project will be evaluated on:

1. Proper use of semantic HTML5 elements
2. Correct nesting and hierarchy of elements
3. Content organization and structure
4. Attention to accessibility considerations
5. Code quality (formatting, comments, etc.)
6. Overall completeness and adherence to requirements

## Additional Challenges (Optional)

For an extra challenge, try implementing:

1. A commenting section structure for each blog post
2. A contact form using semantic elements
3. Structured data using microdata or RDFa
4. Multiple page structure with proper linking

## Submission

When you've completed your project:

1. Validate your HTML using the W3C Validator
2. Test your document outline
3. Ensure all requirements have been met
4. Be prepared to explain your semantic HTML choices

## Contact

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)
