# Lecture 9: Forms in React

## Theory

### 1. Controlled and Uncontrolled Inputs

#### Controlled Inputs

Controlled inputs are fully managed by React using **state**. The value displayed in the input box always comes from React state.

React updates the state whenever the user types, and the UI reflects the updated state.

**Key points:**

* Value comes from state.
* onChange updates the state.
* Always in sync with React.

#### Uncontrolled Inputs

Uncontrolled inputs are managed by the **DOM**, not React. You use **refs** to read the value when needed.

**Key points:**

* Value is not controlled by React.
* No state binding.
* Use refs to access the value.

---

### 2. Handling Form Data

React manages form data through:

* State → For controlled inputs.
* Refs → For uncontrolled inputs.

Common tasks:

* Capturing input values.
* Storing them in state.
* Using them in submission.

---

### 3. Validation Logic

Validation ensures the form contains correct data before submitting.

Types of validation:

* Required field checking
* Email format validation
* Length checking
* Custom logic

Validation prevents wrong data from being processed.

---

### 4. Form Submission

React prevents normal page reload using:

```jsx
e.preventDefault();
```

Then you can check inputs and send data to APIs.

---

## Practical Examples (Full Programs)

### Example 1: Controlled Input Form

```jsx
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlled Form Example</h2>

      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
```

---

### Example 2: Uncontrolled Input Form Using Refs

```jsx
import { useRef } from "react";

export default function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Uncontrolled Form Example</h2>

      <input type="text" placeholder="Enter name" ref={nameRef} />
      <input type="email" placeholder="Enter email" ref={emailRef} />

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### Example 3: Full Form With Validation and Submission

```jsx
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") {
      alert("Name is required");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    alert("Form submitted successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Form With Validation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

---

## Practice Tasks

### Task 1: Create a Login Form

* Inputs: email, password
* Both must be required
* Password must be at least 6 characters
* Show appropriate validation alerts

### Task 2: Create a Registration Form

Fields:

* Name
* Email
* Password
* Confirm Password

Validation:

* All fields required
* Email format check
* Password and confirm password must match

### Task 3: Create a Contact Form

Fields:

* Full Name
* Mobile Number
* Message

Validation:

* Mobile number must be 10 digits
* Message must be minimum 20 characters

### Task 4: Create a Feedback Form (Uncontrolled Inputs)

* Use refs for all inputs
* On submission, console.log all values

### Task 5: Create a Multi-step Form (Simple)

Step 1: Name
Step 2: Email
Step 3: Review and Submit

Use **state** to switch between steps.

---

