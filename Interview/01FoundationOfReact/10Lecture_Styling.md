# Interview Questions & Answers: React Styling


---

## 1. How do you apply inline styling in React?

**Answer:** Inline styles are passed as JavaScript objects with camelCase properties:

```jsx
<div style={{ color: 'blue', fontSize: '20px' }}>Hello</div>
```

---

## 2. How do you use external CSS in React?

**Answer:** Create a `.css` file, import it in the component, and apply class names:

```jsx
import './App.css';
<div className="container">Content</div>
```

---

## 3. What are CSS modules in React?

**Answer:** CSS Modules are scoped CSS files that avoid class name conflicts. Import them as an object:

```jsx
import styles from './App.module.css';
<div className={styles.container}>Content</div>
```

---

## 4. What are styled-components?

**Answer:** Styled-components is a library that allows writing CSS in JS. Components have their own encapsulated styles:

```jsx
import styled from 'styled-components';
const Button = styled.button`background: blue; color: white;`;
```

---

## 5. How do you set up Tailwind CSS in a React project?

**Answer:**

1. Install Tailwind via npm.
2. Configure `tailwind.config.js`.
3. Import Tailwind directives in `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Use Tailwind classes in JSX.

---

## 6. Can you combine inline styles and className?

**Answer:** Yes, you can use both:

```jsx
<div className="box" style={{ color: 'red' }}>Text</div>
```

Inline styles override external CSS for the same properties.

---

## 7. What is the difference between inline styling and CSS modules?

**Answer:**

* **Inline styling:** Scoped to the element, dynamic via JS, but cannot use pseudo-classes.
* **CSS modules:** Scoped via hashed class names, support pseudo-classes and media queries.

---

## 8. How do you conditionally apply CSS classes in React?

**Answer:** Use template literals or libraries like `classnames`:

```jsx
<div className={`box ${isActive ? 'active' : ''}`}></div>
```

---

## 9. Are styled-components better than CSS modules?

**Answer:** Both have advantages. Styled-components provide dynamic styling via props and JS logic, while CSS modules are simpler and integrate with existing CSS workflow.

---

## 10. Can you use Tailwind with styled-components or CSS modules?

**Answer:** Yes. Tailwind utility classes can be used with styled-components or CSS modules. Example with styled-components:

```jsx
const Button = styled.button`@apply bg-blue-500 text-white p-2;`;
```
