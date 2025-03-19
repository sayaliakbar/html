# Week 3 Project: Enhanced Registration Form

## Objective

Create a comprehensive registration form that demonstrates your understanding of various form elements and best practices for form structure and organization.

## Requirements

1. Create a registration form with the following sections:

   - Personal Information
   - Contact Details
   - Account Preferences
   - Additional Information

2. Include the following form elements:

   - Text inputs (name, email, etc.)
   - Password input with confirmation
   - Radio buttons (for selecting options)
   - Checkboxes (for agreement to terms, preferences, etc.)
   - Select dropdown menus
   - Textarea for additional information
   - Submit and Reset buttons

3. Apply proper form structure:

   - Use appropriate form attributes (method, action)
   - Group related inputs using fieldsets and legends
   - Include proper labels for all form elements
   - Apply appropriate input attributes (required, placeholder, etc.)

4. Style your form using basic CSS for better readability:
   - Clear visual separation between form sections
   - Consistent spacing and alignment
   - Readable font sizes and colors

## Submission Guidelines

- Create an index.html file with your form implementation
- Include a styles.css file for your form styling
- Add comments in your HTML explaining the purpose of different sections

## Bonus Challenges

- Implement a multi-step form using multiple fieldsets
- Add basic client-side validation for email and password fields
- Make your form responsive for both desktop and mobile viewing
- Include a file upload input with accepted file types specified

## Resources

- [MDN Web Docs: HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [W3C HTML5 Forms Documentation](https://www.w3.org/TR/html52/sec-forms.html)

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
