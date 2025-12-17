# Lecture 21: `useCallback` Hook

## Theory

### What is `useCallback`?

`useCallback` is used to **memoize functions** so they are not recreated on every render.

```js
const memoizedFn = useCallback(() => {
  doSomething();
}, [dependencies]);
```

### Why Function Memoization Matters

In React:

* Functions are recreated on every render
* Passing functions to child components can cause **unnecessary re-renders**

This is especially important with `React.memo`.

---

## `useCallback` vs `useMemo`

| Hook          | What it Memoizes   |
| ------------- | ------------------ |
| `useMemo`     | Computed **value** |
| `useCallback` | **Function**       |

Internally:

```js
useCallback(fn, deps) === useMemo(() => fn, deps)
```

---

## Practical Examples (Full Programs)

### Example 1: Without `useCallback`

```jsx
import { useState } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

Problem:

* `Child` re-renders every time parent renders

---

### Example 2: Using `useCallback` with `React.memo`

```jsx
import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

Benefit:

* Child re-renders **only when dependencies change**

---

## When to Use `useCallback`

Use `useCallback` when:

* Passing functions to memoized child components
* Functions are dependencies of other hooks
* Preventing unnecessary re-renders

Avoid overusing it — unnecessary memoization can reduce readability.

---

## Practice Tasks

1. Create a parent-child component structure
2. Use `React.memo` on child
3. Compare behavior with and without `useCallback`
4. Add dependencies and observe re-renders
