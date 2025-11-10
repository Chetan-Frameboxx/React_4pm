# **Lecture 5: State and useState (React Foundation)**

---

##  **Theory**

### **1. What is State**

* **State** in React refers to data or variables that determine a component’s behavior and how it renders.
* It’s **mutable** (can be changed), unlike props, which are **read-only**.
* When a component’s state changes, React **re-renders** that component automatically.

> **Example:** A counter, form input, or toggle button all rely on state.

---

### **2. Updating State**

* You can update state using the **state updater function** provided by the `useState` hook.
* State updates are **asynchronous**, meaning changes don’t happen instantly.
* React **schedules** re-renders for components when state changes.

```jsx
setCount(count + 1);
```

> Always use the **updater function** form if your next state depends on the previous one:

```jsx
setCount(prevCount => prevCount + 1);
```

---

### **3. Multiple State Variables**

* You can use **multiple `useState` hooks** in one component to manage different pieces of data.
* Each `useState` manages **its own independent state**.

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState('');
```

---

### **4. Difference Between Props and State**

| Feature              | Props                                   | State                             |
| -------------------- | --------------------------------------- | --------------------------------- |
| **Definition**       | Data passed *into* a component          | Data managed *inside* a component |
| **Mutable?**         |  Read-only                             |  Can be updated                  |
| **Who controls it?** | Parent component                        | The component itself              |
| **Use case**         | Displaying static or parent-driven data | Interactive, changing data        |

---

### **5. Rules of Hooks**

1. **Only call Hooks at the top level**
   → Don’t use inside loops, conditions, or nested functions.

2. **Only call Hooks in React functions**
   → Use in React components or custom hooks, not regular JS functions.

3. **Use the “use” prefix** for custom hooks
   → Example: `useFetchData`, `useToggle`.

---

##  **Practical Examples**

### **Example 1: Simple Counter using useState**

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5 text-center">
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
```

---

### **Example 2: Handling Multiple States**

```jsx
import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className="p-5 text-center">
      <h2>User Form</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserForm;
```

---

### **Example 3: Updating State Using Previous Value**

```jsx
import { useState } from 'react';

function StepCounter() {
  const [steps, setSteps] = useState(0);

  const addStep = () => {
    setSteps(prevSteps => prevSteps + 1);
  };

  return (
    <div className="p-5 text-center">
      <h2>Step Counter</h2>
      <p>Steps: {steps}</p>
      <button onClick={addStep}>Add Step</button>
    </div>
  );
}

export default StepCounter;
```

---

##  **Practice Tasks**

### **Task 1: Like Button**

Create a button that toggles between “Liked” and “Like”.
Use `useState` to store and toggle the like status.

---

### **Task 2: Show/Hide Text**

Add a button that shows or hides a paragraph of text when clicked.
Hint: Use a boolean state variable (`isVisible`).

---

### **Task 3: Two Counters**

Create two independent counters in the same component using multiple `useState` hooks.

---

### **Task 4: Form with Multiple Fields**

Create a form with inputs for `name`, `email`, and `password`.
Use separate state variables for each and display them dynamically.

---

### **Task 5: Dynamic Background**

Create a button that toggles background color (light/dark mode) using a state variable.
