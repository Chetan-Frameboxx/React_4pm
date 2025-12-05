# Lecture 10: React Styling

* Inline Styling
* External CSS and CSS Modules
* Styled Components (Intro)
* Tailwind Setup and Usage


## Theory

### 1. Inline Styling

Inline styling in React uses JavaScript objects. Keys are written in camelCase instead of kebab-case.

#### Example

```jsx
function InlineStyleExample() {
  const boxStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "8px",
  };

  return <div style={boxStyle}>This is styled with inline styling</div>;
}
```

### 2. External CSS and CSS Modules

React supports normal CSS files, and also **CSS Modules**, which scope styles to a specific component.

#### External CSS Example

```css
/* App.css */
.box {
  background-color: tomato;
  padding: 20px;
  border-radius: 8px;
}
```

```jsx
import './App.css';

function App() {
  return <div className="box">Using External CSS</div>;
}
```

#### CSS Modules Example

```css
/* Box.module.css */
.container {
  background-color: lightgreen;
  padding: 20px;
}
```

```jsx
import styles from './Box.module.css';

export default function Box() {
  return <div className={styles.container}>CSS Modules Example</div>;
}
```

### 3. Styled Components (Intro)

Styled Components allow CSS-in-JS.

#### Example

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
`;

export default function StyledExample() {
  return <Button>Click Me</Button>;
}
```

### 4. Tailwind Setup and Usage

Tailwind is a utility-first CSS framework.

#### Installation Steps

1. Install Tailwind:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Add paths to `tailwind.config.js`:

```js
content: ["./src/**/*.{js,jsx}"]
```

3. Import Tailwind styles into `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Example Usage

```jsx
export default function TailwindExample() {
  return <div className="p-4 bg-blue-500 text-white rounded-xl">Tailwind Box</div>;
}
```

## Practical Examples

### Example 1: Combine Inline + External CSS

```jsx
import './style.css';

export default function Demo() {
  const styleObj = { fontSize: "22px" };
  return <p className="highlight" style={styleObj}>Mixed Styling</p>;
}
```

### Example 2: Styled Components Button Group

```jsx
const StyledBtn = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 6px;
  background: purple;
  color: white;
`;
```

## Practice Tasks

1. Create a card component using **CSS Modules**.
2. Create a button group using **styled components**.
3. Design a profile card using **Tailwind utility classes**.
4. Rewrite the same UI using **inline styling**, **external CSS**, and **Tailwind**, and compare all three approaches.
5. Build a small layout (header, sidebar) using Tailwind.
