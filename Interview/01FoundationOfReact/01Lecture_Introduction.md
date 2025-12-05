# Interview Questions & Answers: Introduction to React


---

## 1. What is React?

**Answer:** React is a JavaScript library developed by Facebook for building fast and interactive user interfaces, primarily for single‑page applications. It allows developers to build UI components that manage their own state.

---

## 2. Why is React called a library and not a framework?

**Answer:** React focuses only on the View layer of an application. It doesn’t include built‑in routing, state management, or form handling like full frameworks do. These must be added using external libraries.

---

## 3. What are the main features of React?

**Answer:** Key features include:

* Component‑based architecture
* Virtual DOM for performance
* Unidirectional data flow
* JSX syntax
* Strong community and ecosystem

---

## 4. What advantages does React provide over traditional DOM manipulation?

**Answer:** React updates only the required parts of the UI using Virtual DOM diffing, reducing expensive real DOM operations and improving speed and performance.

---

## 5. What is a Single Page Application (SPA)?

**Answer:** An SPA is a web application that loads a single HTML file and dynamically updates UI content without reloading the entire page. React is commonly used for building SPAs due to its component‑based design.

---

## 6. How does the Virtual DOM work?

**Answer:** React keeps a lightweight copy of the actual DOM in memory (Virtual DOM). When state changes, React compares the old and new Virtual DOM (diffing) and updates only the changed elements in the real DOM.

---

## 7. Why is Virtual DOM faster than Real DOM?

**Answer:** The real DOM is slow to update because changing one element can trigger reflow and repaint operations. Virtual DOM performs calculations in memory and minimizes real DOM updates, improving performance.

---

## 8. How do you set up a React project using Vite?

**Answer:**

1. Install Node.js
2. Run: `npm create vite@latest myapp --template react`
3. Navigate into the folder: `cd myapp`
4. Install dependencies: `npm install`
5. Start the server: `npm run dev`

---

## 9. Why use Vite instead of Create React App (CRA)?

**Answer:**

* Much faster development server
* Lightning‑fast HMR (Hot Module Replacement)
* Smaller bundle sizes
* Better performance for modern JavaScript

---

## 10. What is the default folder structure in a React + Vite project?

**Answer:** A basic Vite React project includes:

* `index.html` – entry HTML file
* `src/` – main source folder

  * `main.jsx` – React entry point
  * `App.jsx` – root component
  * `assets/` – images and static files
* `package.json` – dependencies and scripts
* `vite.config.js` – Vite configuration
