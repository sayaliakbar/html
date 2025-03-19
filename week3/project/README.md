# Week 3 Project: Simple Form

## Project Overview

For this week's project, you will create an interactive form for collecting user information. This project will demonstrate your understanding of HTML forms, input types, and form organization principles.

## Requirements

Your simple form project should include:

1. **A Registration Form** with:

   - A descriptive title and introduction
   - Required personal information fields
   - Preference selection options
   - Terms and conditions acceptance
   - Submit and reset buttons

2. **Form Fields to Include:**

   - Text inputs (name, email, etc.)
   - Password field with confirmation
   - Radio buttons for single-choice options
   - Checkboxes for multiple-choice options
   - Select dropdown for options
   - Textarea for comments/bio
   - Date input
   - File upload option
   - Hidden field

3. **Form Organization:**

   - Use fieldsets to group related form elements
   - Include legends for each fieldset
   - Properly associate labels with inputs
   - Include placeholder text where appropriate
   - Mark required fields

4. **Validation Features:**
   - Use HTML5 input types for built-in validation
   - Set required attributes for mandatory fields
   - Add min/max attributes where applicable
   - Include pattern attributes for specific formats

## Implementation Requirements

1. **File Structure**

   - Create a file named `registration-form.html` in this project folder
   - All form elements should be contained within a single HTML file

2. **Form Structure**

   - Implement a logical tab order for form navigation
   - Group related fields using fieldsets
   - Include clear instructions for form completion

3. **Accessibility**

   - Use proper labeling for all form controls
   - Include ARIA attributes where appropriate
   - Provide clear error messages and instructions
   - Ensure keyboard navigation works properly

4. **Design and Organization**
   - Organize the form into logical sections
   - Use appropriate input types for different data
   - Include a clear submission process

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Form</title>
  </head>
  <body>
    <h1>Account Registration</h1>

    <p>
      Please fill out the form below to create your account. Fields marked with
      * are required.
    </p>

    <form action="/submit-registration" method="post">
      <!-- Personal Information Section -->
      <fieldset>
        <legend>Personal Information</legend>

        <label for="fullname">Full Name: *</label>
        <input type="text" id="fullname" name="fullname" required />
        <br /><br />

        <label for="email">Email Address: *</label>
        <input type="email" id="email" name="email" required />
        <br /><br />

        <!-- Additional fields... -->
      </fieldset>

      <!-- Account Information Section -->
      <fieldset>
        <legend>Account Information</legend>

        <label for="username">Username: *</label>
        <input type="text" id="username" name="username" required />
        <br /><br />

        <!-- Password fields... -->
      </fieldset>

      <!-- Preferences Section -->
      <fieldset>
        <legend>Preferences</legend>

        <!-- Radio buttons, checkboxes, and dropdown... -->
      </fieldset>

      <!-- Terms and Conditions -->
      <fieldset>
        <legend>Terms and Conditions</legend>

        <label for="terms">
          <input type="checkbox" id="terms" name="terms" required />
          I accept the Terms and Conditions *
        </label>
      </fieldset>

      <!-- Form buttons -->
      <button type="submit">Register</button>
      <button type="reset">Reset Form</button>
    </form>
  </body>
</html>
```

## Evaluation Criteria

Your project will be evaluated on:

1. Correct implementation of form elements and attributes
2. Proper form organization using fieldsets and legends
3. Implementation of validation features
4. Accessibility considerations
5. Organization and user experience
6. Code quality and validation

## Submission

When you've completed your project:

1. Validate your HTML code
2. Test your form in multiple browsers
3. Ensure all form elements function as expected
4. Be prepared to demonstrate your form's features and explain your implementation choices

## Contact

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)
