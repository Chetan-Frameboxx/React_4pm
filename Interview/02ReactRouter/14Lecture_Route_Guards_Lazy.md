# Interview Questions & Answers: Route Guards and 404 Pages in React Router



---

## 1. What is lazy loading in React Router?

**Answer:** Lazy loading allows you to load components only when needed, reducing initial bundle size and improving performance. Use `React.lazy` and `Suspense` to implement.

---

## 2. How do you implement lazy loading for a route?

**Answer:**

```jsx
import { lazy, Suspense } from 'react';
const About = lazy(() => import('./About'));
<Suspense fallback={<div>Loading...</div>}><About /></Suspense>
```

---

## 3. What is a protected route?

**Answer:** A protected route restricts access to certain routes based on authentication or user roles. Users must meet conditions to access the route.

---

## 4. How do you create a protected route in React Router?

**Answer:** Wrap the route with a component that checks authentication:

```jsx
function ProtectedRoute({ children }) {
  const isAuth = checkAuth();
  return isAuth ? children : <Navigate to='/login' />;
}
```

---

## 5. What is conditional navigation?

**Answer:** Conditional navigation redirects users to different routes based on conditions, like login status, using `useNavigate` or `Navigate`.

---

## 6. How do you handle 404 Not Found pages?

**Answer:** Use a wildcard route `'*'` to render a 404 page:

```jsx
{ path: '*', element: <NotFound /> }
```

---

## 7. Can lazy loading be combined with protected routes?

**Answer:** Yes. You can wrap lazy-loaded components inside a protected route component to enforce authentication.

---

## 8. Why use route guards in React Router?

**Answer:** Route guards prevent unauthorized access, improve security, and ensure users can only see routes they are allowed to access.

---

## 9. How do you redirect users after login?

**Answer:** Use `useNavigate` to programmatically navigate to a specific route after authentication:

```jsx
const navigate = useNavigate();
navigate('/dashboard');
```

---

## 10. What are the benefits of lazy loading routes?

**Answer:** Reduces initial load time, improves performance, and allows splitting code into smaller, manageable chunks for better user experience.
