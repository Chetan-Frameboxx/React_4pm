# Lecture 3: Components

## Theory

### 1. Functional vs Class Components

* **Functional Components**

  * Simple JavaScript functions.
  * Use hooks (useState, useEffect, etc.).
  * Preferred in modern React.
  * Easier to read, write, and test.

* **Class Components** (Older React)

  * Use ES6 classes.
  * Have lifecycle methods (componentDidMount, etc.).
  * Not commonly used now.

---

### 2. Component Naming and Structure

* Always **PascalCase**: `Header`, `UserCard`, `Navbar`.
* Should return **one parent element**.
* Keep components small and meaningful.
* Structure example:

```jsx
function Header() {
  return <h1>Welcome</h1>;
}
```

---

### 3. Reusability and Composition

* Components should be **reusable**.
* Compose components like building blocks.
* Example:

```jsx
function Card({ title, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
```

---

### 4. Export & Import Components

* **Named Export**:

```jsx
export function Header() {}
```

* **Default Export**:

```jsx
export default Header;
```

* Importing:

```jsx
import Header from './Header';
```

---

## Practical Examples (Full Programs)

### Example 1: Simple Functional Component

```jsx
function Message() {
  return <p>Hello from React!</p>;
}
export default Message;
```

### Example 2: Component Composition

```jsx
function Title() {
  return <h1>Dashboard</h1>;
}

function Dashboard() {
  return (
    <div>
      <Title />
      <p>Welcome to the dashboard.</p>
    </div>
  );
}

export default Dashboard;
```

### Example 3: Passing Props

```jsx
function User(props) {
  return <h3>User: {props.name}</h3>;
}

function App() {
  return <User name="Chetan" />;
}

export default App;
```

---

## Practice Tasks

1. Create a `Header`, `Footer`, and `Content` component and display them in `App`.
2. Build a reusable `Button` component with `text` as props.
3. Make a `Card` component and pass `title` and `description` as props.
4. Create a `Profile` component that accepts name, age, and city.
5. Build a simple layout by composing 4 small components together.
