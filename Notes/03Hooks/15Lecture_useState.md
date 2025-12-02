# React Hook Lecture: **useState** 

## 1. Theory

### What is `useState`?

`useState` is a React Hook that lets your component remember values between renders. Think of it as a tiny stateful pocket that React watches carefully – whenever the value inside changes, React quietly re-renders the component to reflect the new state.

---

### Why do we need `useState`?

* Components without state are static.
* To manage dynamic data (input values, counters, toggles, fetched results), we need state.
* `useState` makes functional components capable of handling state without converting them to class components.

---

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

* **state** → current value
* **setState** → function to update the value
* **initialValue** → default value (number, string, boolean, object, array, function)

---

### Rules of `useState`

1. Only call hooks **at the top level** of a component.
2. Only call hooks **inside** React components or custom hooks.
3. Re-renders occur when you call the setter function.

---

### State Updates Are Asynchronous

React batches updates for performance. So calling `setState` doesn’t immediately update the value. If you need the latest state, use the **function form**:

```jsx
setCount(prev => prev + 1);
```

---

### Lazy Initialization

If the initial value is expensive to compute:

```jsx
const [value, setValue] = useState(() => heavyCalculation());
```

`useState` will run the function **only on first render**.

---

### State With Objects & Arrays

React does not merge objects; you must create copies:

```jsx
setUser(prev => ({ ...prev, age: prev.age + 1 }));
```

```jsx
setList(prev => [...prev, newItem]);
```

---

### Multiple State Variables

Each `useState` is independent:

```jsx
const [name, setName] = useState('');
const [age, setAge] = useState(18);
```

Often better than one large object.

---

## 2. Practical Examples (Full Programs)

### Example 1: Simple Counter

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
```

---

### Example 2: Updating Objects

```jsx
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({ name: "Aman", age: 20 });

  const updateAge = () => {
    setUser(prev => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <div>
      <h3>{user.name} ({user.age})</h3>
      <button onClick={updateAge}>Grow Older</button>
    </div>
  );
}
```

---

### Example 3: Managing Arrays

```jsx
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos(prev => [...prev, input]);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
```

---

### Example 4: Functional Updates

```jsx
import { useState } from "react";

export default function IncrementFive() {
  const [count, setCount] = useState(0);

  const increaseFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prev => prev + 1);
    }
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseFive}>Increase by 5</button>
    </div>
  );
}
```

---

## 3. Practice Tasks

### **Task 1 — Character Counter**

Create an input box and display how many characters the user has typed.

* Hint: `useState('')`

### **Task 2 — Light/Dark Theme Toggle**

Clicking a button should switch between two themes.

* Hint: store theme as `'light'` or `'dark'`

### **Task 3 — Add Items to Cart**

Maintain an array of items clicked by the user.

* Hint: `setCart(prev => [...prev, newItem])`

### **Task 4 — Show/Hide Password**

Toggle the input type between text and password.

### **Task 5 — Simple Stopwatch Increment**

A button increases time by +1 second.

### **Task 6 — Update Nested Object**

Maintain a profile object with `{name, age, city}` and update only city.

### **Task 7 — Form Handling**

Make a small form with name + email and store it as a single object.

### **Task 8 — Random Quote Generator (Local Quotes)**

Store quotes in an array and show a new one on button click.

### **Task 9 — Click Counter with Reset**

Three buttons: `+`, `-`, `reset`.

### **Task 10 — Favorite Color Picker**

Three buttons: Red, Blue, Green. Store selected color in state.

---


