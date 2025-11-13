# **Lecture 7: Conditional Rendering (React Foundation)**

---

##  **Theory**

### **1. What is Conditional Rendering?**

* Conditional rendering means **showing different UI elements based on certain conditions**.
* React handles conditions just like regular JavaScript — using `if`, `else`, `ternary`, or logical `&&` operators.

> Think of it as deciding *what to show* depending on *the state or props*.

---

### **2. Using if-else Statements**

You can use `if` statements inside your component to decide what to render.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Back!</h2>;
  } else {
    return <h2>Please Log In</h2>;
  }
}

export default Greeting;
```

---

### **3. Using Ternary Operator ( ? : )**

The ternary operator is commonly used for inline conditions.

```jsx
function Greeting({ isLoggedIn }) {
  return <h2>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h2>;
}
```

> Use this when you want to conditionally render small pieces of JSX inside other components.

---

### **4. Using Logical AND (&&) Operator**

Use `&&` when you only need to render something **if a condition is true**.

```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {hasMessage && <p>You have new messages!</p>}
    </div>
  );
}
```

> If `hasMessage` is `false`, React ignores the second part and renders nothing.

---

### **5. Displaying Components Conditionally**

You can render different **entire components** based on conditions.

```jsx
import Login from './Login';
import Dashboard from './Dashboard';

function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
}
```

> Useful in authentication, dashboards, or when switching between modes (light/dark, admin/user, etc.).

---

##  **Practical Examples**

### **Example 1: Simple if-else Condition**

```jsx
import { useState } from 'react';

function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div className="p-5 text-center">
        <h2>Welcome Back, User!</h2>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="p-5 text-center">
        <h2>Please Log In</h2>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    );
  }
}

export default Welcome;
```

---

### **Example 2: Ternary Operator Example**

```jsx
import { useState } from 'react';

function TernaryExample() {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="p-5 text-center">
      <h2>{isDay ? 'Good Morning ' : 'Good Night '}</h2>
      <button onClick={() => setIsDay(!isDay)}>Toggle Time</button>
    </div>
  );
}

export default TernaryExample;
```

---

### **Example 3: Logical AND (&&) Example**

```jsx
import { useState } from 'react';

function MessageAlert() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="p-5 text-center">
      <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>
      {showMessage && <p> You just toggled a message!</p>}
    </div>
  );
}

export default MessageAlert;
```

---

### **Example 4: Login / Logout Conditional Rendering**

```jsx
import { useState } from 'react';

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-5 text-center">
      {isLoggedIn ? (
        <>
          <h2>Welcome, User</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Log In</h2>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default LoginLogout;
```

---

##  **Practice Tasks**

### **Task 1: Greeting Component**

Display "Welcome Back" if a user is logged in, otherwise show "Guest Mode".

---

### **Task 2: Toggle Light Mode**

Create a component that switches between "Light Mode" and "Dark Mode" using a button and conditional rendering.

---

### **Task 3: Notification Display**

Show a notification message only when a boolean state `showNotification` is true.

---

### **Task 4: Conditional Component Rendering**

Render a `Profile` component if logged in, otherwise render a `LoginForm` component.

---

### **Task 5: Dynamic Greeting (Bonus)**

Ask for a name input. If a name is entered, display "Hello, [name]!"; otherwise display "Enter your name".
