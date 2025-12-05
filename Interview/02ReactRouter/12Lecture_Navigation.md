# Interview Questions & Answers: Navigation and Parameters in React Router

---

## 1. What is the `useNavigate` hook in React Router?

**Answer:** `useNavigate` is a hook that allows programmatic navigation between routes without using `<Link>`. It returns a function to navigate to a specific path.

---

## 2. How do you use `useNavigate`?

**Answer:**

```jsx
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/about');
```

---

## 3. What is the `useParams` hook in React Router?

**Answer:** `useParams` allows you to access dynamic route parameters from the URL.

```jsx
const { id } = useParams();
```

---

## 4. How do you define dynamic routes?

**Answer:** Use a colon `:` before the parameter name:

```jsx
{ path: '/user/:id', element: <User /> }
```

---

## 5. How do you read parameters in the target component?

**Answer:** Use `useParams` inside the component:

```jsx
const { id } = useParams();
console.log(id);
```

---

## 6. Can you pass parameters programmatically with `useNavigate`?

**Answer:** Yes, you can pass state or query params:

```jsx
navigate('/about', { state: { from: 'home' } });
```

---

## 7. How do you access state passed via `useNavigate`?

**Answer:** Use the `useLocation` hook:

```jsx
import { useLocation } from 'react-router-dom';
const location = useLocation();
console.log(location.state.from);
```

---

## 8. Can route parameters be optional?

**Answer:** Yes, you can define optional parameters using `?` in the path:

```jsx
{ path: '/user/:id?' }
```

---

## 9. How do you handle multiple parameters in a route?

**Answer:** Define multiple parameters in the path and read via `useParams`:

```jsx
{ path: '/user/:id/:action' }
const { id, action } = useParams();
```

---

## 10. Why is using `useNavigate` preferred over traditional redirects?

**Answer:** It allows SPA navigation without full page reloads, keeps history intact, and enables d
