# Interview Questions & Answers: Forms in React


---

## 1. What is a controlled component in React?

**Answer:** A controlled component is a form input whose value is controlled by React state. Changes are handled via `onChange` events.

---

## 2. What is an uncontrolled component in React?

**Answer:** An uncontrolled component is a form input that maintains its own state in the DOM. Values are accessed using `refs`.

---

## 3. How do you handle form data in React?

**Answer:** Use `useState` to track input values and `onChange` handlers to update state. On form submission, access state to process the data.

---

## 4. How do you prevent the default form submission behavior?

**Answer:** Use `event.preventDefault()` in the form's `onSubmit` handler to prevent page reload.

---

## 5. How do you validate form inputs in React?

**Answer:** Perform validation in event handlers or `onSubmit`. Check for empty fields, correct formats, or custom rules, and show error messages conditionally.

---

## 6. Can you submit a form using controlled components?

**Answer:** Yes. Track input values in state and use the `onSubmit` handler to access and process the values.

---

## 7. How do you access values in uncontrolled components?

**Answer:** Use the `useRef` hook to reference the DOM element and access its `value` property when needed.

---

## 8. What is the difference between controlled and uncontrolled components?

**Answer:** Controlled components use React state to manage values and are predictable. Uncontrolled components rely on the DOM, making them simpler but less controllable.

---

## 9. Why is form validation important in React?

**Answer:** It ensures that users provide correct and expected input before submission, improving data integrity and user experience.

---

## 10. Give an example of a simple form submission in React.

**Answer:**

```jsx
import { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Name:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default SimpleForm;
```
