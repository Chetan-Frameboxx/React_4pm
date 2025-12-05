# Lecture 4: **Props (Properties)**

## Theory

### 1. Passing Data via Props

Props (short for **properties**) allow you to send data **from parent component → to child component**.

* Props are **read-only**.
* They help make components **dynamic** and **reusable**.

Example:

```jsx
<App /> --> <User name="Chetan" />
```

---

### 2. Using Props in JSX

Props are accessed inside the child component using:

* `props.propertyName`
* OR destructuring

Example:

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

Destructured:

```jsx
function User({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}
```

---

### 3. Default Props

If a prop is not passed, you can define default values.

Example:

```jsx
function Button({ text = "Click Me" }) {
  return <button>{text}</button>;
}
```

Or using `defaultProps` (older way):

```jsx
Button.defaultProps = {
  text: "Click Me",
};
```

---

### 4. Props vs Variables

| Props               | Variables                   |
| ------------------- | --------------------------- |
| Passed from parent  | Declared inside a component |
| Read-only           | Mutable (in function scope) |
| Dynamic             | Temporary                   |
| Used for UI updates | Used for calculations       |

Example:

```jsx
const name = "Chetan"; // variable
<User name={name} />;  // prop
```

---

### 5. Props Drilling (Intro)

Props drilling happens when you pass data through **multiple levels** of components, even if intermediate components don’t need it.

Example:

```
App → Component A → Component B → Component C
```

Where only Component C needs the data.

This problem is solved using **Context API** (covered later).

---

## Practical Examples (Full Programs)

### Example 1: Passing Props

```jsx
function Welcome({ user }) {
  return <h1>Welcome, {user}</h1>;
}

function App() {
  return <Welcome user="Chetan" />;
}

export default App;
```

---

### Example 2: Reusable Button with Props

```jsx
function Button({ text, color }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Save" color="green" />
      <Button text="Delete" color="red" />
    </div>
  );
}

export default App;
```

---

### Example 3: Default Props Example

```jsx
function Card({ title = "Default Title", content = "No content" }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
```

---

## Practice Tasks

1. Create a `Student` component with props: name, course, city.
2. Build a `Product` card component using props: title, price, rating.
3. Create a `Button` with default text and custom color.
4. Make a `Profile` component and pass multiple props (name, age, gender, location).
5. Demonstrate props drilling with 3 components.
