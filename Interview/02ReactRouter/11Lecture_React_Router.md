# Interview Questions & Answers: Introduction to React Router



---

## 1. What is React Router?

**Answer:** React Router is a library used for routing in React applications. It allows navigation between different components without reloading the page, enabling single-page application behavior.

---

## 2. How do you install React Router?

**Answer:** Install via npm:

```bash
npm install react-router-dom
```

---

## 3. How do you set up React Router in a project?

**Answer:** Use `createBrowserRouter` and `RouterProvider`:

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> }
]);
<RouterProvider router={router} />
```

---

## 4. What is the role of `createBrowserRouter`?

**Answer:** It creates a router object with route configuration that `RouterProvider` can use to manage navigation in the app.

---

## 5. What is the role of `RouterProvider`?

**Answer:** `RouterProvider` makes the router available to the application and handles rendering the correct component based on the URL.

---

## 6. What is the difference between `Link` and `NavLink`?

**Answer:**

* **Link:** Navigates to a route without reloading the page.
* **NavLink:** Extends Link by applying an active class when the route matches the current URL.

---

## 7. How do you create navigation links in React Router?

**Answer:**

```jsx
<Link to="/about">About</Link>
<NavLink to="/contact">Contact</NavLink>
```

---

## 8. Can you pass parameters via React Router?

**Answer:** Yes, using route parameters:

```jsx
{ path: '/user/:id', element: <User /> }
```

Inside component: `useParams()` to access `id`.

---

## 9. How do you handle 404 or unknown routes?

**Answer:** Use a wildcard route:

```jsx
{ path: '*', element: <NotFound /> }
```

---

## 10. Why use React Router instead of normal anchor `<a>` tags?

**Answer:** React Router prevents full page reloads, maintaining SPA behavior and improving performance, whereas `<a>` tags reload
