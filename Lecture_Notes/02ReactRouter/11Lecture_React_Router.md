# Lecture 11: Introduction to React Router

* Installing and Setting up React Router
* createBrowserRouter and RouterProvider
* Link and NavLink Components

## Theory

### 1. Installing and Setting up React Router

React Router allows navigation in single-page applications.

#### Installation

```
npm install react-router-dom
```

### 2. createBrowserRouter and RouterProvider

In React Router v6.4+, routing uses a data-API-based approach.

#### Example Setup

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "about", element: <About /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

### 3. Link and NavLink Components

These components are used for navigation without reloading the page.

#### Link Example

```jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

#### NavLink Example (with active styles)

```jsx
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
```

## Practical Examples

### Example 1: Basic Router with Three Pages

```jsx
const router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
]);
```

### Example 2: Navigation Bar

```jsx
function Navbar() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  );
}
```

## Practice Tasks

1. Set up React Router in a new project.
2. Create Home, Services, and Contact pages.
3. Build a navbar using NavLink with active styling.
4. Practice switching between pages without reload.
5. Add a 404 page and ensure it shows for unknown routes.
