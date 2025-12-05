# Lecture 17: useRef Hook

## Theory

### 1. Accessing DOM Elements

* `useRef` allows you to create a mutable reference object.
* You can attach it to any DOM element using the `ref` attribute.
* It helps you perform actions like focusing an input, reading element properties, or integrating non-React libraries.
* Unlike `useState`, changing a ref **does not cause re-render**.

### 2. Persisting Values

* `useRef` stores a value that **persists across re-renders**.
* Useful for:

  * Storing previous values
  * Storing timeouts/interval IDs
  * Keeping counters without triggering UI updates
  * Preserving values that should not trigger re-render

### 3. useRef vs useState

| Feature                       | useRef                     | useState                  |
| ----------------------------- | -------------------------- | ------------------------- |
| Causes re-render on update    | No                         | Yes                       |
| Value persists across renders | Yes                        | Yes                       |
| Best for                      | DOM access, mutable values | UI state, reactive values |
| When value changes            | Stays internal             | Updates UI                |
| Store non-UI data             | Yes                        | Not recommended           |

---

## Practical Examples

### Example 1: Accessing DOM Elements

```jsx
import { useRef } from "react";

export default function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <input ref={inputRef} className="border p-2" placeholder="Type here" />
      <button onClick={handleFocus} className="ml-2 p-2 border rounded">
        Focus Input
      </button>
    </div>
  );
}
```

### Example 2: Persisting Values (Counter Without Re-render)

```jsx
import { useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <p>Component Rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)} className="p-2 border rounded">
        Increment
      </button>
    </div>
  );
}
```

### Example 3: Storing Timeout ID

```jsx
import { useRef } from "react";

export default function App() {
  const timeoutRef = useRef(null);

  const startTimer = () => {
    timeoutRef.current = setTimeout(() => {
      alert("Timer Finished");
    }, 2000);
  };

  const stopTimer = () => {
    clearTimeout(timeoutRef.current);
  };

  return (
    <div className="p-4">
      <button onClick={startTimer} className="p-2 border rounded mr-2">
        Start Timer
      </button>
      <button onClick={stopTimer} className="p-2 border rounded">
        Stop Timer
      </button>
    </div>
  );
}
```

---

## Practice Tasks

### Task 1: Auto Focus Input on Page Load

* Use `useRef` and `useEffect`.
* Focus the input field as soon as the component loads.

### Task 2: Build a Stopwatch

* Start, Stop, Reset buttons.
* Use `useRef` to store interval ID.
* Display time using `useState`.

### Task 3: Previous Value Tracker

* Store the previous value of a text input.
* Use `useRef` to store previous value across renders.

### Task 4: Character Count Without Re-render

* Use `useRef` to track number of times a user typed.
* Show the value only when a separate button is clicked.

---

