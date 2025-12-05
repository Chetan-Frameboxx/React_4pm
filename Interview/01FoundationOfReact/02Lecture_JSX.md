# Interview Questions & Answers: JSX Fundamentals


---

## 1. What is JSX?

**Answer:** JSX stands for *JavaScript XML*. It is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript, making UI creation more intuitive.

---

## 2. Why do we use JSX in React?

**Answer:** JSX makes code easier to read and write by combining UI structure and logic in one place. It also allows React to optimize rendering using its Virtual DOM.

---

## 3. Is JSX mandatory in React?

**Answer:** No. React can be written using pure JavaScript with `React.createElement()`. However, JSX is preferred because it is more readable and developer-friendly.

---

## 4. How do you embed JavaScript expressions inside JSX?

**Answer:** JavaScript expressions can be embedded using curly braces `{}`. Example:

```jsx
const name = "Chetan";
<p>Hello {name}</p>
```

---

## 5. What type of JavaScript code can be placed inside curly braces `{}` in JSX?

**Answer:** Any valid expression such as variables, function calls, arithmetic operations, ternary operators, and array methods. Statements like `if`, `for`, etc., are not allowed.

---

## 6. What are some important JSX rules developers must follow?

**Answer:**

* JSX must return a single parent element.
* Use `className` instead of `class`.
* All tags must be properly closed.
* CamelCase is required for event handlers (e.g., `onClick`).

---

## 7. Why must JSX have only one root element?

**Answer:** React components must return a single element so React can keep a predictable structure in the Virtual DOM. Wrapping with `<div>` or `<> </>` (Fragments) solves this.

---

## 8. What are some JSX best practices?

**Answer:**

* Break UI into reusable components.
* Keep JSX clean and avoid deeply nested structures.
* Extract logic into functions instead of inline computations.
* Use meaningful variable and component names.

---

## 9. What are the major differences between JSX and HTML?

**Answer:**

* JSX uses `className` instead of `class`.
* Inline styles are objects, not strings.
* JSX expressions are embedded using `{}`.
* All tags must be closed.
* HTML attributes may differ (e.g., `htmlFor` instead of `for`).

---

## 10. How are inline styles written in JSX?

**Answer:** Inline styles are written as JavaScript objects:

```jsx
<div style={{ color: "blue", fontSize: "20px" }}>Hello</div>
```
