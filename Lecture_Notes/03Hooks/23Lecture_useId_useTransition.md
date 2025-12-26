# Lecture 23 — useId and useTransition 

---

## Theory

### 1. What is `useId`?

`useId` is a React Hook introduced to generate **stable, unique IDs** that work correctly with **server-side rendering (SSR)** and **hydration**.

Key points:

* IDs are **unique per component instance**
* IDs remain consistent between **server and client**
* Mainly used for **accessibility (a11y)** and **form-label associations**

Syntax:

* `const id = useId()`

Use cases:

* Associating `<label>` with `<input>`
* Generating unique IDs for ARIA attributes
* Avoiding manual ID collisions

---

### 2. Why not use Math.random() or index?

Problems with traditional approaches:

* `Math.random()` → hydration mismatch in SSR
* Array index → unstable during re-renders
* Manual IDs → collision risk

`useId` solves all of these safely.

---

### 3. Concurrent Rendering Basics

Concurrent Rendering allows React to:

* Interrupt rendering
* Prioritize urgent updates
* Keep UI responsive during heavy computations

Important characteristics:

* Rendering is **interruptible**
* UI can remain interactive
* Updates can be marked as **urgent** or **non-urgent**

React decides:

* What to render first
* What can be paused or delayed

---

### 4. What is `useTransition`?

`useTransition` lets you mark **non-urgent state updates** so React can keep the UI responsive.

Syntax:

* `const [isPending, startTransition] = useTransition()`

Concept:

* Urgent updates → typing, clicking
* Non-urgent updates → filtering, sorting, large lists

---

### 5. Why use `useTransition`?

Without `useTransition`:

* UI may freeze during expensive re-renders

With `useTransition`:

* Immediate feedback to user
* Background updates handled smoothly
* Loading indicators possible using `isPending`

---

## Practical Examples (Full Programs)

---

### Example 1: `useId` with Form Labels

```jsx
import { useId } from "react";

function LoginForm() {
  const usernameId = useId();
  const passwordId = useId();

  return (
    <form>
      <div>
        <label htmlFor={usernameId}>Username</label>
        <input id={usernameId} type="text" />
      </div>

      <div>
        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} type="password" />
      </div>
    </form>
  );
}

export default LoginForm;
```

Why this works:

* IDs are unique
* SSR-safe
* Accessibility compliant

---

### Example 2: `useTransition` for Filtering a Large List

```jsx
import { useState, useTransition } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function SearchList() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const result = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(result);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />

      {isPending && <p>Loading...</p>}

      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
```

Explanation:

* Typing remains fast (urgent update)
* Filtering runs as non-urgent
* `isPending` shows loading feedback

---

### Example 3: Combining `useId` and `useTransition`

```jsx
import { useId, useState, useTransition } from "react";

function ProductSearch() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      const data = Array.from({ length: 5000 }, (_, i) => `Product ${i}`);
      setResults(data.filter(item => item.includes(value)));
    });
  };

  return (
    <div>
      <label htmlFor={inputId}>Search Products</label>
      <input id={inputId} value={text} onChange={handleSearch} />

      {isPending && <p>Searching...</p>}

      <ul>
        {results.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
```

---

## Practice Tasks

### Task 1: useId Practice

* Create a registration form
* Use `useId` for all input-label pairs
* Add at least 4 fields

---

### Task 2: useTransition Basics

* Create a list of 5000 items
* Add a search box
* Use `useTransition` for filtering

---

### Task 3: Loading Indicator

* Show "Loading..." using `isPending`
* Hide it when transition completes

---

### Task 4: Performance Comparison

* Implement filtering without `useTransition`
* Compare typing experience
* Write observations

---

### Task 5: Mini Project

* Build a searchable product catalog
* Use `useId` for accessibility
* Use `useTransition` for smooth filtering

---

## Summary

* `useId` → safe, stable unique IDs
* Concurrent Rendering → better responsiveness
* `useTransition` → smoother non-urgent updates
* Together → accessible and high-performance React apps

---

