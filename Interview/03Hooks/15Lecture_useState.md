# Interview Questions & Answers: useState Hook in React


---

## 1. What is the `useState` hook in React?

**Answer:** `useState` is a React hook that allows functional components to have state. It returns a state variable and a setter function.

---

## 2. How do you initialize state using `useState`?

**Answer:**

```jsx
const [count, setCount] = useState(0);
```

The argument `0` is the initial state.

---

## 3. How do you update state with `useState`?

**Answer:** Use the setter function:

```jsx
setCount(count + 1);
```

React will re-render the component with the new state.

---

## 4. How can you reset state using `useState`?

**Answer:** Set it back to the initial value:

```jsx
setCount(0);
```

---

## 5. Can `useState` hold arrays or objects?

**Answer:** Yes. You can store arrays or objects as state:

```jsx
const [items, setItems] = useState([]);
const [user, setUser] = useState({name: '', age: 0});
```

---

## 6. How do you update an object in state?

**Answer:** Use spread operator to maintain immutability:

```jsx
setUser(prev => ({ ...prev, name: 'Chetan' }));
```

---

## 7. How do you update an array in state?

**Answer:** Use spread operator or array methods:

```jsx
setItems(prev => [...prev, newItem]);
```

---

## 8. What happens if you directly modify the state variable?

**Answer:** Direct modifications do not trigger re-renders. Always use the setter function to update state.

---

## 9. Can multiple `useState` hooks be used in one component?

**Answer:** Yes, you can declare multiple state variables for different purposes:

```jsx
const [count, setCount] = useState(0);
const [text, setText] = useState('');
```

---

## 10. Why is immutability important when using `useState`?

**Answer:** Maintaining immutability ensures React can correctly detect changes and trigger re-renders. Modifying state dir
