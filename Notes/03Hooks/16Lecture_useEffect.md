# Lecture 16: **useEffect Hook** 

## 1. Theory

### What is `useEffect`?

`useEffect` lets your component perform *side effects* — things that live slightly outside the quiet, predictable world of rendering. Examples include:

* Fetching data
* Working with localStorage
* Subscribing to events
* Updating the document title
* Setting timers

React runs your effect **after** the component renders.

---

## Lifecycle Simulation with `useEffect`

React functional components do not have lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, but `useEffect` can simulate all three depending on how you configure it.

---

### 1. **`componentDidMount` equivalent** (Runs once)

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []); // empty dependency array
```

* Runs only on the first render.

---

### 2. **`componentDidUpdate` equivalent** (Runs on state/prop changes)

```jsx
useEffect(() => {
  console.log("State changed");
}, [count]);
```

* Runs **every time `count` changes**.

---

### 3. **`componentWillUnmount` equivalent** (Cleanup)

```jsx
useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);

  return () => {
    clearInterval(id);
    console.log("Component unmounted");
  };
}, []);
```

* Cleanup runs when the component is removed.
* Also runs before the effect re-runs.

---

## Dependency Array

The dependency array controls **when** your effect runs.

### 1. **No dependency array** → Runs on every render

```jsx
useEffect(() => {
  console.log("Effect runs every render");
});
```

### 2. **Empty dependency array** → Runs only once

```jsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

### 3. **With dependencies** → Runs when dependencies change

```jsx
useEffect(() => {
  console.log("Name changed");
}, [name]);
```

React deeply compares dependencies. Arrays/objects/functions should be handled carefully (use state or memo functions if needed).

---

## Cleanup Function

Many effects need cleanup:

* Removing event listeners
* Clearing intervals/timeouts
* Canceling API calls

```jsx
useEffect(() => {
  function handleScroll() {
    console.log("Scrolling...");
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
```

Cleanup fires:

1. When the component unmounts
2. Before the effect runs again

---

# 2. Practical Examples (Full Programs)

## Example 1: Document Title Updater

```jsx
import { useState, useEffect } from "react";

export default function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Click {count}</button>
  );
}
```

---

## Example 2: Fetching API Data

```jsx
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

---

## Example 3: Interval Timer with Cleanup

```jsx
import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);

    return () => clearInterval(id);
  }, []);

  return <h2>{seconds} seconds</h2>;
}
```

---

## Example 4: Listening to Window Resize

```jsx
import { useEffect, useState } from "react";

export default function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <h2>Width: {width}px</h2>;
}
```

---

# 3. Practice Tasks

### **Task 1 — Auto Counter**

Increase a counter every second using `setInterval`.

### **Task 2 — Online/Offline Detector**

Use `window.navigator.onLine` and update status with event listeners.

### **Task 3 — Track Mouse Position**

Display real-time X/Y coordinates.

### **Task 4 — Todo Save in localStorage**

Save todos on change, load from storage on mount.

### **Task 5 — API Fetch on Button Click + Loader**

Only fetch when the user clicks a button.

### **Task 6 — Cleanup Timer**

Start a timer on mount; clear it on unmount.

### **Task 7 — Theme Sync with System Theme**

Detect `prefers-color-scheme` and update UI.

### **Task 8 — Block Window Resize Spam**

Implement a debounced resize listener.

### **Task 9 — Show a Quote Every 5 Seconds**

Rotate through an array using intervals.

### **Task 10 — Form Auto Save**

Save form values to localStorage whenever they change.

---

