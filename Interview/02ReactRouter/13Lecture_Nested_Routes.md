# Interview Questions & Answers: Nested and Layout Routes in React Router



---

## 1. What is nested routing in React Router?

**Answer:** Nested routing allows you to render child routes inside a parent route. This helps organize complex layouts and share components like headers and sidebars.

---

## 2. How do you define nested routes?

**Answer:** Define child routes inside the `children` property of a parent route:

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> }
    ]
  }
]);
```

---

## 3. What is a layout route in React Router?

**Answer:** A layout route is a parent route that contains shared UI components (like Header, Footer) and renders child routes using `<Outlet />`.

---

## 4. How do you create a layout component?

**Answer:**

```jsx
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

---

## 5. What is the role of the `<Outlet />` component?

**Answer:** `<Outlet />` renders the matching child route component inside the layout. It acts as a placeholder for nested route content.

---

## 6. Can layout routes have their own paths?

**Answer:** Yes. A layout route can have a path, and its child routes are appended to it.

---

## 7. How do you handle multiple nested levels?

**Answer:** You can nest `children` inside a route recursively. Each level uses `<Outlet />` to render the next level.

---

## 8. How do you add shared components like Header and Footer?

**Answer:** Include them inside the layout component, outside the `<Outlet />`:

```jsx
<Header />
<Outlet />
<Footer />
```

---

## 9. Can nested routes have their own layouts?

**Answer:** Yes. Each nested route can define a layout component with its own `<Outlet />`, allowing multi-level layouts.

---

## 10. Why use nested routes in React Router?

**Answer:** Nested routes allow cleaner organization, code reuse, and efficient handling of shared layouts, making complex SPAs easier to maintain.
