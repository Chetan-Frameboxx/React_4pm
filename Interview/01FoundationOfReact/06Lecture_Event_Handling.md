# Interview Questions & Answers: Event Handling in React


---

## 1. How does event handling work in React?

**Answer:** React handles events using camelCase syntax (e.g., `onClick`) and passes a function as the event handler instead of a string. React events are synthetic events, providing cross-browser compatibility.

---

## 2. What is a synthetic event in React?

**Answer:** A synthetic event is React’s wrapper around the browser’s native event. It normalizes event behavior across different browsers and provides the same interface as native events.

---

## 3. How do you handle events in JSX?

**Answer:** Attach event handlers using camelCase and pass a callback function:

```jsx
<button onClick={handleClick}>Click</button>
```

---

## 4. How do you access the event object inside an event handler?

**Answer:** React automatically passes the event object to the handler:

```jsx
function handleClick(e) {
  console.log(e.target);
}
```

---

## 5. How do you pass parameters to event handlers?

**Answer:** Use an arrow function:

```jsx
<button onClick={() => handleClick(5)}>Click</button>
```

This ensures the handler runs only when the event occurs.

---

## 6. What are commonly used event handlers in React?

**Answer:**

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseEnter`
* `onKeyDown`
  These follow camelCase naming and take functions as values.

---

## 7. How does `onChange` work for form inputs?

**Answer:** `onChange` triggers every time the value of an input changes. It is commonly used with state to create controlled components.

```jsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

---

## 8. What is a controlled component?

**Answer:** A controlled component is an input element whose value is controlled by React state. The UI is always in sync with the state.
Example:

```jsx
const [value, setValue] = useState("");
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

---

## 9. How is a form submission handled using `onSubmit`?

**Answer:** Attach `onSubmit` to a form and prevent default behavior:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitted");
}
<form onSubmit={handleSubmit}>...</form>
```

---

## 10. Why should event handlers be functions instead of calling the function directly?

**Answer:** If you write `onClick={handleClick()}`, the function will execute immediately during rendering. Using `onClick={handleClick}` ensures it only executes when the user interacts with the element.
