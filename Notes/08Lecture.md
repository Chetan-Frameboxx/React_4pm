# **Lecture 8: Lists and Keys (React Foundation)**

---

##  **Theory**

### **1. Rendering Lists with `map()`**

* In React, the most common way to render lists is using JavaScript's `map()` function.
* `map()` takes an array and returns a new array of JSX elements.

Example:

```jsx
const items = ['Apple', 'Banana', 'Orange'];

const itemList = items.map(item => <li>{item}</li>);
```

* React efficiently updates only the items that change.

---

### **2. Using Unique Keys**

* When rendering lists, React **requires a unique `key` prop** for each item.
* Keys help React identify which items changed, were added, or removed.
* A **key must be unique, consistent, and stable**.

What to use as keys:

* A unique ID from data (BEST)
* Index (ONLY when list is static or never changes order)

Correct Example:

```jsx
items.map(item => <li key={item.id}>{item.name}</li>)
```

Incorrect Example:

```jsx
items.map(item => <li>{item.name}</li>) //  Missing key
```

---

### **3. Dynamic List Rendering**

* Lists can be dynamic: adding, removing, updating items.
* State (`useState`) is commonly used to manage dynamic lists.

Example workflow:

* User types something
* Clicks a button → item gets added to list
* Component re-renders

---

##  **Practical Examples**

### **Example 1: Simple List Rendering**

```jsx
function FruitsList() {
  const fruits = ['Apple', 'Banana', 'Mango'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitsList;
```

---

### **Example 2: List with Unique Keys**

```jsx
function UsersList() {
  const users = [
    { id: 1, name: 'Aman' },
    { id: 2, name: 'Arun' },
    { id: 3, name: 'Riya' }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```

---

### **Example 3: Dynamic List – Add Items**

```jsx
import { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: task
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  return (
    <div className="p-5 text-center">
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

##  **Practice Tasks**

### **Task 1: List of Names**

Render a list of names using `map()`. Use index as key.

---

### **Task 2: Unique Key List**

Render a list of products with unique id keys.

---

### **Task 3: Dynamic Todo App**

Add new tasks using an input box and button.

---

### **Task 4: Remove Item from List**

Create a list where each item has a delete button to remove it.

---

### **Task 5: Dynamic User List**

Create a form to add users (name + age) and display the list dynamically.
