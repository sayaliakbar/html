# Week 6 Quiz: Advanced Forms

Test your knowledge of advanced form features and techniques covered in Week 6. Answer the following questions to check your understanding.

## Multiple Choice Questions

1. **Which input type would be most appropriate for collecting a user's birthday?**

   - A) `<input type="text" placeholder="MM/DD/YYYY">`
   - B) `<input type="date">`
   - C) `<input type="number">`
   - D) `<input type="datetime">`

2. **Which attribute is used to make a form field required?**

   - A) `mandatory="true"`
   - B) `required`
   - C) `validate="required"`
   - D) `necessary="true"`

3. **How do you create a range slider in HTML5?**

   - A) `<input type="slide" min="0" max="100">`
   - B) `<input type="range" min="0" max="100">`
   - C) `<slider min="0" max="100">`
   - D) `<input type="slider" min="0" max="100">`

4. **Which element provides a list of pre-defined options for an input field?**

   - A) `<selectlist>`
   - B) `<optionlist>`
   - C) `<datalist>`
   - D) `<autocomplete>`

5. **What is the purpose of the pattern attribute in form inputs?**

   - A) To style the input element
   - B) To specify a regular expression that the input's value must match
   - C) To define the type of input element
   - D) To connect related form fields

6. **Which element is used to display the result of a calculation or user action?**

   - A) `<result>`
   - B) `<display>`
   - C) `<output>`
   - D) `<calculation>`

7. **Which attribute helps browsers fill out form fields based on previous entries?**

   - A) `autofill`
   - B) `autocomplete`
   - C) `autopopulate`
   - D) `autodata`

8. **Which input type automatically displays a color picker?**
   - A) `<input type="palette">`
   - B) `<input type="colorpicker">`
   - C) `<input type="rgb">`
   - D) `<input type="color">`

## True or False

9. **The `<input type="number">` element will prevent users from typing non-numeric characters.**

   - True
   - False

10. **You can use the `multiple` attribute with `<input type="file">` to allow users to select multiple files.**

    - True
    - False

11. **The `<datalist>` element restricts users to only selecting options from the list.**

    - True
    - False

12. **Form validation using HTML5 attributes works consistently across all browsers.**
    - True
    - False

## Short Answer Questions

13. **Explain the difference between the `min`/`max` attributes and the `minlength`/`maxlength` attributes in form inputs.**

14. **What is the purpose of ARIA attributes in forms, and name three ARIA attributes that can improve form accessibility.**

15. **Describe three best practices for creating user-friendly form validation error messages.**

## Answer Key

(For instructor use only)

1. B
2. B
3. B
4. C
5. B
6. C
7. B
8. D
9. False (it adds constraints but users can still type non-numeric characters in some browsers)
10. True
11. False (unlike `<select>`, `<datalist>` provides suggestions but allows other values)
12. False (implementation varies by browser)
13. `min`/`max` attributes specify the minimum and maximum values for numeric inputs (like numbers, dates, ranges), while `minlength`/`maxlength` attributes specify the minimum and maximum number of characters for text inputs.
14. ARIA attributes improve accessibility by providing additional information to assistive technologies. Three useful ARIA attributes for forms: `aria-required` indicates whether a field is required, `aria-describedby` associates descriptive text with a form control, and `aria-invalid` indicates validation state.
15. Best practices for error messages: 1) Be specific about what's wrong (e.g., "Password must be at least 8 characters" instead of "Invalid password"), 2) Position error messages near the relevant field, 3) Use clear, non-technical language that explains how to fix the issue, 4) Use multiple cues (color, icon, text) to indicate errors, not just color alone, 5) Show error messages at the appropriate time (after user interaction with field).

## Contact

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)
