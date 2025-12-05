# Interview Questions & Answers: useContext Hook in React


---

## 1. What is the `useContext` hook in React?

**Answer:** `useContext` allows functional components to access the value of a React context directly, avoiding the need to pass props through multiple levels.

---

## 2. What is the Context API?

**Answer:** The Context API provides a way to share data across components without manually passing props at every level.

---

## 3. How do you create a context?

**Answer:**

```jsx
import { createContext } from 'react';
const ThemeContext = createContext();
```

---

## 4. How do you provide a context value?

**Answer:** Wrap the component tree with `Context.Provider`:

```jsx
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

---

## 5. How do you consume a context using `useContext`?

**Answer:**

```jsx
import { useContext } from 'react';
const theme = useContext(ThemeContext);
```

---

## 6. How does `useContext` help avoid props drilling?

**Answer:** It allows child components to access data directly from the context, without needing intermediate components to pass props.

---

## 7. Can you update context values using `useContext`?

**Answer:** Yes, but the context value must be a state object or function passed from the provider:

```jsx
const { theme, setTheme } = useContext(ThemeContext);
```

---

## 8. Is `useContext` suitable for all state management?

**Answer:** No. It is best for global or shared data like themes or authentication, but not for frequently changing local state due to re-rendering.

---

## 9. Can multiple contexts be used in a component?

**Answer:** Yes. You can call `useContext` multiple times to consume different contexts.

---

## 10. Why prefer `useContext` over passing props manually?

**Answer:** It simplifies component hierarchy, reduces boilerplate, and avoids unnecessary prop passing th
