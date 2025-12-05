# Lecture 18: **useContext Hook**

## 1. Theory

## What is the Context API?

The **Context API** allows data to be shared across multiple components **without passing props manually at every level**.

It is mainly used to avoid **prop drilling**, where a value has to be passed through many components that don’t need it.

Common use cases:

* Authentication details (user logged in or not)
* Theme (dark/light)
* Language settings
* Global app state

---

## What is `useContext`?

`useContext` is a React Hook that allows your component to **consume** values from a Context.

```jsx
const value = useContext(MyContext);
```

### `useContext` does two things:

1. Finds the nearest **Provider** of the given Context in the component tree.
2. Returns the value stored in that Provider.

---

# 2. Context API Overview

Context consists of three main parts:

### 1. **Create Context**

```jsx
const ThemeContext = createContext();
```

---

### 2. **Provide Context Value**

Wrap your components:

```jsx
<ThemeContext.Provider value={something}>
  <App />
</ThemeContext.Provider>
```

---

### 3. **Consume Context Value** (using `useContext`)

```jsx
const theme = useContext(ThemeContext);
```

---

# 3. Creating and Using Context (Step-by-Step)

## Step 1: Create the context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

## Step 2: Wrap components with Provider

```jsx
import { UserContext } from "./UserContext";

export default function App() {
  const user = { name: "Aman", age: 21 };

  return (
    <UserContext.Provider value={user}>
      <Home />
    </UserContext.Provider>
  );
}
```

---

## Step 3: Consume the context using `useContext`

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Home() {
  const user = useContext(UserContext);

  return <h2>Welcome, {user.name}</h2>;
}
```

---

# 4. Avoiding Props Drilling

### What is Props Drilling?

When a value has to be passed **through multiple middle components** just to reach a deeply nested component.

Example of prop drilling:

```jsx
<App>
  <A user={user}>
    <B user={user}>
      <C user={user}>
        <D user={user} />
      </C>
    </B>
  </A>
</App>
```

When only `D` needs the user.

### How Context fixes this

```jsx
<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>
```

Inside `D`:

```jsx
const user = useContext(UserContext);
```

No more long chains of props.

---

# 5. Practical Examples (Full Programs)

## Example 1: Theme Switcher

### **ThemeContext.js**

```jsx
import { createContext } from "react";
export const ThemeContext = createContext();
```

### **App.js**

```jsx
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Home from "./Home";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}
```

### **Home.js**

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </div>
  );
}
```

---

## Example 2: Multi-Level User Sharing

### **UserContext.js**

```jsx
import { createContext } from "react";
export const UserContext = createContext();
```

### **App.js**

```jsx
import { UserContext } from "./UserContext";
import Profile from "./Profile";

export default function App() {
  const user = { name: "Karan", email: "karan@example.com" };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}
```

### **Profile.js**

```jsx
import Details from "./Details";
export default function Profile() {
  return <Details />;
}
```

### **Details.js**

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Details() {
  const user = useContext(UserContext);

  return <h3>{user.name} - {user.email}</h3>;
}
```

---

# 6. Practice Tasks

### **Task 1 — Global Theme Context**

Use a context to toggle theme from any page.

### **Task 2 — User Login Context**

Store `{isLoggedIn, userData}` in context and use it across components.

### **Task 3 — Language Switcher**

Provide languages like EN, HI, FR through context.

### **Task 4 — Cart Context (Add/Remove Items)**

Manage cart items globally without props drilling.

### **Task 5 — Notification Context**

Create a global notification system.

### **Task 6 — Stepper App**

Use context to share current step and setter between components.

### **Task 7 — Multi-Theme App (3 themes)**

Use context to switch among light, dark, blue.

### **Task 8 — Context + useEffect**

Store context value in localStorage.

### **Task 9 — Global Modal Handler**

Use context to open/close modals from any component.

### **Task 10 — User Role Handling**

Show/hide components based on user roles from context.

---
