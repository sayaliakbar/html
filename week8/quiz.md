# Week 8 Quiz: Metadata and API Integration

Test your knowledge of HTML metadata and API integration with this quiz. Choose the best answer for each question.

## Multiple Choice Questions

1. **What is the primary purpose of the `<meta name="description">` tag?**

   - A. To provide a description for screen readers
   - B. To provide a summary that search engines may use in search results
   - C. To describe the page to other developers
   - D. To add keywords for search engine ranking

2. **Which viewport meta tag setting is recommended for responsive websites?**

   - A. `<meta name="viewport" content="width=1024px">`
   - B. `<meta name="viewport" content="width=device-width, initial-scale=0.5">`
   - C. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
   - D. `<meta name="viewport" content="width=device-width, user-scalable=no">`

3. **Which of the following is NOT a valid Open Graph property?**

   - A. `og:title`
   - B. `og:image`
   - C. `og:keywords`
   - D. `og:description`

4. **Which Twitter Card type would be most appropriate for a blog post with a large featured image?**

   - A. `summary`
   - B. `summary_large_image`
   - C. `player`
   - D. `app`

5. **What is the benefit of using JSON-LD for structured data instead of Microdata?**

   - A. JSON-LD is the only format supported by Google
   - B. JSON-LD keeps the structured data separate from the HTML markup
   - C. JSON-LD works with older browsers while Microdata doesn't
   - D. JSON-LD provides automatic translations of content

6. **When embedding an iframe from a third-party source, which attribute helps with page performance?**

   - A. `async`
   - B. `defer`
   - C. `loading="lazy"`
   - D. `performance="high"`

7. **What is the recommended size for an Open Graph image for optimal display across most platforms?**

   - A. 800×600 pixels
   - B. 1024×512 pixels
   - C. 1200×630 pixels
   - D. 1500×1500 pixels

8. **Which attribute should be used with `<iframe>` to improve accessibility?**

   - A. `alt`
   - B. `description`
   - C. `title`
   - D. `aria-label`

9. **When implementing structured data for a product page, what Schema.org type should you use?**

   - A. `Article`
   - B. `ProductPage`
   - C. `Product`
   - D. `ItemPage`

10. **Which meta tag helps prevent duplicate content issues by specifying the preferred URL version?**
    - A. `<meta name="preferred-url">`
    - B. `<link rel="canonical">`
    - C. `<meta name="original-source">`
    - D. `<link rel="original">`

## True or False Questions

11. **Social media metadata like Open Graph has no effect on search engine rankings.**

12. **Adding Schema.org structured data to your HTML requires JavaScript to work properly.**

13. **The `<meta charset="UTF-8">` declaration should ideally be the first element inside the `<head>` tag.**

14. **It's best practice to keep API keys visible in your front-end code for easier debugging.**

15. **When embedding external content, you should always provide fallback content for users when the embedded content fails to load.**

## Short Answer Questions

16. **List three types of information you should include in Open Graph metadata for a product page.**

17. **Explain why using asynchronous loading for third-party scripts is important for page performance.**

18. **Describe two security concerns when integrating third-party APIs on your website.**

19. **What is the purpose of Schema.org structured data, and how do search engines use it?**

20. **Explain the difference between the `<meta name="robots">` tag and a robots.txt file.**

## Answer Key

1. B
2. C
3. C
4. B
5. B
6. C
7. C
8. C
9. C
10. B
11. True (though it may indirectly help through better engagement metrics)
12. False
13. True
14. False
15. True
16. Title, image, description, price, availability, brand
17. Asynchronous loading prevents third-party scripts from blocking page rendering, improving page load speed and user experience.
18. Cross-site scripting (XSS) vulnerabilities, data privacy concerns, unauthorized API access if keys are exposed, content injection
19. Schema.org structured data provides standardized formats that help search engines understand page content. Search engines use it to create rich snippets, knowledge panels, and other enhanced search results.
20. The meta robots tag is used on individual pages to control how search engines index that specific page, while robots.txt is a file at the root of the site that provides broader crawling instructions to search engine bots.
