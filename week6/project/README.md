# Week 6 Project: Interactive Form

## Project Overview

For this week's project, you will create an advanced interactive form that demonstrates the use of HTML5 form features, validation, and accessibility best practices. This project will showcase your understanding of modern form design principles and implementation techniques.

## Requirements

Your interactive form project should include:

1. **Form Content and Purpose:**

   - Design a form for one of the following purposes:
     - Job application form
     - Event registration form
     - Product order form
     - Survey or feedback form
     - Account creation and profile setup

2. **HTML5 Input Types and Features:**

   - Use at least 8 different HTML5 input types appropriate for the data being collected
   - Implement proper form structure with fieldsets and legends
   - Use datalist for providing suggestions
   - Include output elements for dynamic content
   - Create logical tab order for keyboard navigation
   - Add appropriate autocomplete attributes

3. **Form Validation:**

   - Implement required fields with appropriate indicators
   - Use pattern validation for formatted inputs (e.g., phone numbers)
   - Add min/max constraints where applicable
   - Create custom validation messages
   - Implement input length restrictions where appropriate
   - Add sensible default values where helpful

4. **Accessibility Features:**

   - Ensure all form controls have proper labels
   - Include ARIA attributes where necessary
   - Add descriptive instructions for complex inputs
   - Create accessible error messages
   - Ensure form is fully keyboard navigable
   - Use appropriate focus management

5. **Advanced Form Features:**
   - Implement conditional form fields (fields that appear based on other selections)
   - Create a multi-step form with at least 3 steps
   - Include progress indication for multi-step forms
   - Add real-time feedback for user inputs
   - Implement input masking or formatting
   - Create a summary/review step before final submission

## Implementation Requirements

1. **HTML Structure:**

   - Use semantic HTML throughout
   - Group related form controls logically
   - Create clear visual hierarchy with headings
   - Add helpful comments explaining form structure

2. **Form Organization:**

   - Break long forms into meaningful sections
   - Organize fields in a logical order
   - Consider mobile-first design principles
   - Ensure consistent spacing and alignment

3. **Validation Approach:**

   - Use HTML5 validation attributes where possible
   - Add custom validation messages
   - Ensure errors are clearly communicated
   - Validate at appropriate times (on submit, on blur, etc.)

4. **Documentation:**
   - Add comments explaining complex form interactions
   - Document the form's purpose and usage
   - Note any browser-specific considerations

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Interactive Registration Form</title>
    <style>
      /* Basic styling to improve form appearance */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }

      fieldset {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      legend {
        font-weight: bold;
        padding: 0 10px;
      }

      .form-group {
        margin-bottom: 15px;
      }

      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }

      input,
      select,
      textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
      }

      input:focus,
      select:focus,
      textarea:focus {
        border-color: #4f9bf8;
        outline: none;
      }

      .form-steps {
        display: none; /* Hide all steps initially */
      }

      .form-steps.active {
        display: block; /* Show only active step */
      }

      .error-message {
        color: #d9534f;
        font-size: 0.85em;
        margin-top: 5px;
      }

      .required::after {
        content: "*";
        color: #d9534f;
        margin-left: 2px;
      }

      .buttons {
        margin-top: 20px;
      }

      button {
        padding: 10px 15px;
        background-color: #4f9bf8;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>Event Registration Form</h1>

    <form id="registration-form" novalidate>
      <!-- Progress Indicator -->
      <div class="progress-indicator">
        <span class="step active">1. Personal Details</span>
        <span class="step">2. Event Preferences</span>
        <span class="step">3. Review & Submit</span>
      </div>

      <!-- Step 1: Personal Details -->
      <div class="form-steps active" id="step1">
        <fieldset>
          <legend>Personal Information</legend>

          <div class="form-group">
            <label for="fullname" class="required">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              autocomplete="name"
              required
              aria-describedby="name-format"
            />
            <small id="name-format"
              >Please enter your first and last name.</small
            >
          </div>

          <div class="form-group">
            <label for="email" class="required">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              autocomplete="tel"
            />
          </div>

          <!-- Additional form fields... -->
        </fieldset>

        <div class="buttons">
          <button type="button" id="next-to-step2">Continue</button>
        </div>
      </div>

      <!-- Additional steps... -->
    </form>
  </body>
</html>
```

## Evaluation Criteria

Your project will be evaluated on:

1. Proper use of HTML5 form elements and attributes
2. Implementation of form validation techniques
3. Accessibility features and considerations
4. Organization and structure of the form
5. Implementation of advanced form features
6. Code quality and documentation
7. User experience and interaction design

## Submission

When you've completed your project:

1. Validate your HTML code
2. Test your form in different browsers
3. Verify keyboard navigation and accessibility
4. Be prepared to demonstrate your form's features
5. Document any browser-specific considerations

## Contact

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)
