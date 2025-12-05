# Interview Questions & Answers: useEffect Hook in React


---

## 1. What is the `useEffect` hook in React?

**Answer:** `useEffect` is a React hook that allows functional components to perform side effects like fetching data, subscriptions, or manually changing the DOM.

---

## 2. How does `useEffect` simulate lifecycle methods?

**Answer:**

* **componentDidMount:** useEffect with empty dependency array `[]`
* **componentDidUpdate:** useEffect with dependencies `[dep1, dep2]`
* **componentWillUnmount:** useEffect with cleanup function

---

## 3. What is the dependency array in `useEffect`?

**Answer:** It is an array of variables that the effect depends on. The effect runs only when one of the dependencies changes.

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

---

## 4. What happens if you omit the dependency array?

**Answer:** The effect runs **after every render**, similar to componentDidUpdate for all state and props changes.

---

## 5. How do you perform cleanup in `useEffect`?

**Answer:** Return a cleanup function from useEffect:

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(timer);
}, []);
```

---

## 6. Can you have multiple `useEffect` hooks in a component?

**Answer:** Yes. Each useEffect can handle different side effects independently.

---

## 7. How do you fetch data using `useEffect`?

**Answer:**

```jsx
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

---

## 8. What is the difference between useEffect and useLayoutEffect?

**Answer:** `useEffect` runs after the render is painted on screen. `useLayoutEffect` runs synchronously **before** the DOM updates, useful for measuring layout.

---

## 9. Can useEffect cause infinite loops?

**Answer:** Yes, if you update a dependency inside the effect without proper checks, it will re-run continuously.

---

## 10. Why is cleanup important in `useEffect`?

**Answer:** Cleanup prevents memory leaks, removes subscriptions, intervals, or event listeners when the component unmounts or dependencies change.
