# Lecture 19: **useReducer Hook**

## 1. Theory

### What is `useReducer`?

`useReducer` is a React Hook used for **state management** when the state logic is complex or involves multiple sub-values.

* Alternative to `useState`.
* Inspired by **Redux**.

Syntax:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

* **state** → current state
* **dispatch** → function to send actions to the reducer
* **reducer** → function that updates state based on action
* **initialState** → starting value

---

### Reducer Function and Actions

The **reducer** is a function that takes the current state and an action, and returns a new state.

```jsx
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
```

* **Actions** are objects with at least a `type` property.
* Optional `payload` can carry extra data:

```jsx
dispatch({ type: 'ADD_TODO', payload: newTodo })
```

---

### Dispatching Actions

* The **dispatch** function triggers the reducer.
* Example:

```jsx
dispatch({ type: 'INCREMENT' });
```

React then calls the reducer, updates the state, and re-renders the component.

---

## 2. Practical Examples (Full Programs)

### Example 1: Simple Counter

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

---

### Example 2: Todo List

```jsx
import { useReducer, useState } from 'react';

const initialTodos = [];

function reducer(todos, action) {
  switch(action.type) {
    case 'ADD':
      return [...todos, action.payload];
    case 'REMOVE':
      return todos.filter((_, index) => index !== action.payload);
    default:
      return todos;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    dispatch({ type: 'ADD', payload: input });
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => dispatch({ type: 'REMOVE', payload: index })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 3. Practice Tasks

1. Implement a counter with **+5** and **-5** buttons using `useReducer`.
2. Create a `TodoList` with actions: ADD, REMOVE, CLEAR ALL.
3. Build a `Cart` reducer to ADD_ITEM, REMOVE_ITEM, INCREMENT_QUANTITY, DECREMENT_QUANTITY.
4. Make a `Theme` reducer with actions: TOGGLE_LIGHT, TOGGLE_DARK.
5. Build a `Form` reducer to handle multiple inputs in a single state object.
6. Implement a voting system (UPVOTE, DOWNVOTE) using `useReducer`.
7. Create a counter with **undo/redo** functionality.
8. Make a `Notification` system with reducer (ADD, REMOVE, CLEAR).
9. Track `likes` on multiple posts using reducer.
10. Combine `useReducer` and `useContext` to manage global state.
