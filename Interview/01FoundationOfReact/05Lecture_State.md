# Interview Questions & Answers: State and useState


---

## 1. What is state in React?

**Answer:** State is a built-in React object used to store dynamic data that can change over time. When state updates, React re-renders the component automatically.

---

## 2. How is state different from props?

**Answer:**

* **State** is managed inside the component and can change.
* **Props** are passed from parent components and are read-only.
  State is internal and mutable, while props are external and immutable.

---

## 3. What is `useState` in React?

**Answer:** `useState` is a React Hook that allows functional components to have state. It returns a value and a function to update that value.
Example:

```jsx
const [count, setCount] = useState(0);
```

---

## 4. How do you update state using `useState`?

**Answer:** By calling the setter function returned by `useState`:

```jsx
setCount(count + 1);
```

React schedules a re-render when the state changes.

---

## 5. Why should we never update state directly?

**Answer:** Direct updates like `count = count + 1` do **not** trigger re-renders. State updates must go through the setter function so React can track changes.

---

## 6. Can a component have multiple state variables?

**Answer:** Yes. You can call `useState` multiple times:

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(0);
```

Each state variable is independent.

---

## 7. What happens when you update state in React?

**Answer:** React re-renders the component, generates a new Virtual DOM tree, compares it with the old one (diffing), and updates only the changed parts in the real DOM.

---

## 8. Are state updates synchronous or asynchronous?

**Answer:** State updates are **asynchronous**. React batches multiple updates to improve performance, so you cannot rely on immediate updated values.

---

## 9. What are the rules of hooks?

**Answer:**

* Hooks must be called **at the top level** of a component.
* Hooks cannot be called inside loops, conditions, or nested functions.
* Hooks can only be used in React functional components or custom hooks.

---

## 10. How do you update state based on the previous value?

**Answer:** Use the callback version of the setter:

```jsx
setCount(prev => prev + 1);
```

This ensures correct updates, especially when multiple updates occur in sequence.
