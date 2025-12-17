# Lecture 20: `useMemo` Hook

## Theory

### What is `useMemo`?

`useMemo` is a React Hook used to **memoize the result of a computation**.
It helps improve performance by **avoiding expensive recalculations** on every render.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

React will:

* Recompute the value **only when dependencies change**
* Return the cached value on other renders

### Why Performance Optimization is Needed

React components re-render when:

* State changes
* Props change
* Parent component re-renders

If a component performs **heavy calculations**, re-rendering can slow down the app.

### When to Use `useMemo`

Use `useMemo` when:

* A calculation is **expensive**
* The result does not need to change on every render
* You want to prevent unnecessary recalculations

---

## Practical Examples (Full Programs)

### Example 1: Without `useMemo` (Performance Issue)

```jsx
import { useState } from "react";

function slowCalculation(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = slowCalculation(count);

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
```

Problem:

* Typing in input **re-runs slow calculation**

---

### Example 2: Using `useMemo`

```jsx
import { useState, useMemo } from "react";

function slowCalculation(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = useMemo(() => slowCalculation(count), [count]);

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
```

Benefit:

* Calculation runs **only when `count` changes**

---

## Practice Tasks

1. Create a component that filters a large array of numbers
2. Apply `useMemo` to optimize filtering
3. Verify using `console.log` when computation runs

---

