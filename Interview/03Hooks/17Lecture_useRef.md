# Interview Questions & Answers: useRef Hook in React


---

## 1. What is the `useRef` hook in React?

**Answer:** `useRef` is a hook that allows you to create a mutable reference that persists across renders. It can be used to access DOM elements or store mutable values.

---

## 2. How do you use `useRef` to access DOM elements?

**Answer:** Attach the ref to a JSX element:

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();
```

---

## 3. How do you persist values using `useRef`?

**Answer:** Values stored in `useRef` persist across renders without causing re-renders:

```jsx
const countRef = useRef(0);
countRef.current += 1;
```

---

## 4. What is the difference between `useRef` and `useState`?

**Answer:**

* `useState` triggers re-renders on updates.
* `useRef` does **not** trigger re-renders and is used for mutable references or DOM access.

---

## 5. Can `useRef` be used to store previous state values?

**Answer:** Yes. You can store previous values to compare or use them:

```jsx
const prevCount = useRef();
useEffect(() => { prevCount.current = count; }, [count]);
```

---

## 6. Is `useRef` suitable for storing frequently changing data?

**Answer:** Yes, if you don't want the component to re-render every time the value changes.

---

## 7. How do you focus an input using `useRef`?

**Answer:**

```jsx
const inputRef = useRef(null);
<button onClick={() => inputRef.current.focus()}>Focus</button>
<input ref={inputRef} />
```

---

## 8. Can `useRef` store objects or arrays?

**Answer:** Yes. `useRef` can store any mutable value including objects, arrays, or primitive types.

---

## 9. How do you reset a ref value?

**Answer:** Directly set the `.current` property:

```jsx
countRef.current = 0;
```

---

## 10. When should you choose `useRef` over `useState`?

**Answer:** Use `useRef` when you need to persist data or access DOM elements **without triggering re-renders**, while `useState` should be used when changes need to update the UI.
