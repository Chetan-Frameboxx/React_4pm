# **Lecture 6: Event Handling (React Foundation)**

---

##  **Theory**

### **1. Handling Events in JSX**

* React uses **camelCase** for event names instead of lowercase (e.g., `onClick`, not `onclick`).
* Event handlers are passed as **functions**, not strings.

```jsx
<button onClick={handleClick}>Click Me</button>
```

* You define the handler function inside your component:

```jsx
function handleClick() {
  alert('Button clicked!');
}
```

> React events are synthetic events — they wrap native browser events for consistency across browsers.

---

### **2. Event Object**

* When an event occurs, React automatically passes an **event object** as an argument.
* This object contains details about the event, such as target element, value, and event type.

```jsx
function handleChange(event) {
  console.log(event.target.value);
}

<input type="text" onChange={handleChange} />
```

> The event parameter is optional but helpful when dealing with form inputs.

---

### **3. Passing Parameters in Handlers**

* You can pass parameters to your event handler using an **arrow function**.

```jsx
function greetUser(name) {
  alert(`Hello, ${name}!`);
}

<button onClick={() => greetUser('Rohan')}>Greet</button>
```

* Avoid calling the function directly (`onClick={greetUser('Rohan')}`), as it executes immediately instead of waiting for the event.

---

### **4. Common Event Types in React**

#### **onClick** — Triggers on button or element click

```jsx
<button onClick={() => alert('Clicked!')}>Click Me</button>
```

#### **onChange** — Triggers when input value changes

```jsx
<input type="text" onChange={(e) => console.log(e.target.value)} />
```

#### **onSubmit** — Triggers on form submission

```jsx
function handleSubmit(e) {
  e.preventDefault(); // prevent page reload
  alert('Form submitted!');
}

<form onSubmit={handleSubmit}>
  <input type="text" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>
```

---

### **5. Controlled Components (Intro)**

* A **controlled component** is an input element whose value is **controlled by React state**.
* This allows React to fully manage the form data.

```jsx
import { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-5 text-center">
      <h2>Controlled Input</h2>
      <input type="text" value={value} onChange={handleChange} />
      <p>Current Value: {value}</p>
    </div>
  );
}

export default ControlledInput;
```

> In controlled components, the state is the **single source of truth** for input values.

---

##  **Practical Examples**

### **Example 1: Click Event**

```jsx
function ClickEvent() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ClickEvent;
```

---

### **Example 2: Input Change Event**

```jsx
import { useState } from 'react';

function InputChange() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-5 text-center">
      <h2>Type Something</h2>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default InputChange;
```

---

### **Example 3: Form Submit Event**

```jsx
function FormSubmit() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted Successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 text-center">
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmit;
```

---

##  **Practice Tasks**

### **Task 1: Button Click Alert**

Create a button that shows an alert with your name when clicked.

---

### **Task 2: Input Logger**

Create an input field that displays every keystroke in real-time using `onChange`.

---

### **Task 3: Passing Parameters**

Create a list of user names. When a name button is clicked, show an alert greeting that specific user.

---

### **Task 4: Controlled Input**

Build a controlled input component where typing updates the value displayed below the box.

---

### **Task 5: Simple Form**

Create a form with `name` and `email` fields. On submit, display the entered details below without reloading the page.
