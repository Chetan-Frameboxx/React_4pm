# Lecture 2: **JSX Fundamentals**

## 1. Theory

## What is JSX?

JSX (**JavaScript XML**) is a syntax extension that allows you to write **HTML-like code inside JavaScript**. React uses JSX to describe UI in an expressive and readable way.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

JSX is not required to use React, but it is the standard and most preferred approach.

---

## 2. JSX Syntax

### Basic Structure

```jsx
const element = <tagname>Content</tagname>;
```

### Multiple Elements

Wrap them using a parent element or React Fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

### Using Attributes

```jsx
const img = <img src="logo.png" alt="Logo" />;
```

Note: JSX uses **camelCase** for most attributes:

* `className` instead of `class`
* `htmlFor` instead of `for`

---

## Embedding Expressions

JSX allows embedding JavaScript expressions using **curly braces `{}`**.

### Examples

```jsx
const name = "React";
return <h1>Hello {name}</h1>;
```

```jsx
const num = 10;
return <p>{num * 5}</p>;
```

You can embed:

* variables
* functions
* conditional expressions
* arrays

### Conditional Rendering

```jsx
{isLoggedIn ? <p>Welcome</p> : <p>Please Login</p>}
```

### Rendering lists

```jsx
const items = ["A", "B", "C"];
return items.map(i => <li key={i}>{i}</li>);
```

---

## 3. JSX Rules and Best Practices

### Rule 1: You must return a single parent element

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Or use fragments:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

### Rule 2: Use camelCase for attributes

Examples:

* `onclick` → `onClick`
* `tabindex` → `tabIndex`

### Rule 3: Close all tags

```jsx
<img />
<input />
```

### Rule 4: Expressions must be inside `{}`

```jsx
<p>{username}</p>
```

### Rule 5: Avoid injecting raw HTML

To render raw HTML, use `dangerouslySetInnerHTML` but only when necessary.

### Rule 6: Use meaningful `key` when rendering lists

```jsx
array.map(item => <li key={item.id}>{item.name}</li>);
```

---

## Differences Between JSX and HTML

| Feature              | JSX                                      | HTML                           |
| -------------------- | ---------------------------------------- | ------------------------------ |
| Attributes           | camelCase (e.g., `className`, `onClick`) | lowercase (`class`, `onclick`) |
| JavaScript embedding | `{}` allowed                             | Not allowed                    |
| Must close tags      | Yes (`<img />`)                          | Not required (`<img>`)         |
| Comments             | `{/* comment */}`                        | `<!-- comment -->`             |
| Parent element       | Required                                 | Not required                   |
| CSS styles           | objects (`style={{color: 'red'}}`)       | strings (`style="color:red;"`) |

---

## 4. Practical Examples (Full Programs)

### Example 1: Simple JSX Component

```jsx
export default function Greeting() {
  const name = "React";
  return <h1>Welcome to {name}</h1>;
}
```

---

### Example 2: JSX with Conditional Rendering

```jsx
export default function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>You are logged in</p> : <p>Please login</p>}
    </div>
  );
}
```

---

### Example 3: JSX with Inline Styling

```jsx
export default function StyledText() {
  return (
    <p style={{ color: "blue", fontSize: 20 }}>
      This is styled JSX
    </p>
  );
}
```

---

### Example 4: Rendering a List

```jsx
export default function ItemList() {
  const items = ["Pen", "Book", "Laptop"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

---

## 5. Practice Tasks

### Task 1: Display user details using JSX

Show name, age, and city using curly braces.

### Task 2: Create a product card using JSX attributes

Include image, name, price.

### Task 3: Render a list of students using `.map()`

### Task 4: Build a greeting based on time of day

Use conditional JSX:

* Morning → "Good Morning"
* Afternoon → "Good Afternoon"
* Evening → "Good Evening"

### Task 5: Create a simple profile component with inline styles

### Task 6: Display a list of tasks with `key`

### Task 7: Use Fragment (`<> </>`) to return multiple elements

### Task 8: Convert HTML code to JSX (class → className, events → camelCase)

### Task 9: Use expressions inside JSX (`{}`) for math operations

### Task 10: Render a list of objects (id, name, price)

---


