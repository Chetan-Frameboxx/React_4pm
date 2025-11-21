# Lecture 13: Nested and Layout Routes

* Nested Routing
* Layout Routes (Header, Footer)
* Outlet Component

## Theory

### 1. Nested Routing

Nested routes allow pages inside pages.

#### Example Setup

```jsx
const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "analytics", element: <Analytics /> },
      { path: "reports", element: <Reports /> }
    ]
  }
]);
```

### 2. Layout Routes (Header, Footer)

Layouts let you share UI (header/footer/sidebar) across multiple pages.

#### Layout Example

```jsx
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
```

### 3. Outlet Component

`Outlet` renders the matching child route.

```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

## Practical Examples

### Example 1: Website Layout

```jsx
const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);
```

### Example 2: Dashboard with Nested Pages

```jsx
const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> }
    ]
  }
]);
```

## Practice Tasks

1. Create a site layout with Header, Footer, and two child pages.
2. Build a dashboard with nested menu: Overview, Students, Teachers.
3. Add a nested blog system: `/blog` and `/blog/:postId`.
4. Create a layout with a sidebar and test nested pages.
5. Make a user profile section with nested tabs: Info, Posts, Gallery.
