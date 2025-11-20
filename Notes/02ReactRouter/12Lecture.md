# Lecture 12: Navigation and Parameters

* useNavigate Hook
* useParams Hook
* Passing and Reading Dynamic Parameters

## Theory

### 1. useNavigate Hook

`useNavigate` allows programmatic navigation (redirecting without clicking a link).

#### Example

```jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function goToProfile() {
    navigate("/profile");
  }

  return <button onClick={goToProfile}>Go to Profile</button>;
}
```

---

### 2. useParams Hook

`useParams` is used to read **dynamic URL parameters**.

#### Example

```jsx
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

If the route is `/user/10`, then `id = 10`.

---

### 3. Passing and Reading Dynamic Parameters

You can pass parameters using a route pattern.

#### Route Setup

```jsx
const router = createBrowserRouter([
  { path: "user/:id", element: <User /> },
]);
```

#### Navigate with a Parameter

```jsx
navigate(`/user/${userId}`);
```

---

## Practical Examples

### Example 1: Navigate with a Button

```jsx
function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/settings")}>
        Go to Settings
      </button>
    </div>
  );
}
```

### Example 2: Dynamic Blog Route

```jsx
const router = createBrowserRouter([
  { path: "blog/:slug", element: <BlogPost /> },
]);
```

```jsx
function BlogPost() {
  const { slug } = useParams();
  return <h1>Blog Post: {slug}</h1>;
}
```

### Example 3: List → Detail Navigation

```jsx
function ProductList() {
  const navigate = useNavigate();

  const openProduct = (id) => navigate(`/product/${id}`);

  return (
    <ul>
      <li onClick={() => openProduct(1)}>Product 1</li>
      <li onClick={() => openProduct(2)}>Product 2</li>
    </ul>
  );
}
```

---

## Practice Tasks

1. Create a page that navigates to `/profile` using a button.
2. Create a dynamic route `/student/:roll` and display the roll number.
3. Build a product list → product details page using parameters.
4. Create a blog list and navigate to `/blog/:slug`.
5. Add a back button using `navigate(-1)` to return to the previous page.
