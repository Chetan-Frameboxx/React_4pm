# Interview Questions & Answers: React Components


---

## 1. What is a component in React?

**Answer:** A component is a reusable piece of UI in React. It represents a part of the interface and can include structure, styling, and logic. Components make React applications modular and scalable.

---

## 2. What is the difference between Functional and Class Components?

**Answer:**

* **Functional Components** are simple JavaScript functions that return JSX. They use hooks for state and lifecycle features.
* **Class Components** use ES6 classes, `this` keyword, and lifecycle methods like `componentDidMount`. Hooks have made functional components the modern standard.

---

## 3. Why are functional components preferred today?

**Answer:** Functional components are easier to write, more readable, have no boilerplate code, and use React Hooks, which make them powerful and more efficient than class components.

---

## 4. How should React components be named?

**Answer:** Component names must start with a **capital letter**. This helps React distinguish components from regular HTML tags. Example: `UserCard`, `LoginForm`.

---

## 5. What is the ideal structure of a functional component?

**Answer:** A clean functional component includes:

* Imports
* Component function
* State and hooks (optional)
* Event handlers (if any)
* JSX return statement
* Export statement

---

## 6. What is component reusability in React?

**Answer:** Reusability means designing components so they can be used multiple times across an application. For example, a Button component can work with different labels, colors, and sizes without rewriting code.

---

## 7. What is component composition?

**Answer:** Composition means combining multiple smaller components to create more complex UI structures. React encourages building UI by composing reusable components together.

---

## 8. How do you import a component in React?

**Answer:** Using ES6 import syntax:

```jsx
import Header from "./Header";
```

The path can be relative or absolute depending on project setup.

---

## 9. How do you export a component in React?

**Answer:** Two ways:

* **Default export:**

```jsx
export default Header;
```

* **Named export:**

```jsx
export const Header = () => {};
```

---

## 10. What is the difference between default and named export in React?

**Answer:**

* **Default export** allows importing without curly braces and with any name.
* **Named export** must be imported using the exact name with curly braces.
  Example:

```jsx
import Header from "./Header";        // default
import { Header } from "./Header";    // named
```
