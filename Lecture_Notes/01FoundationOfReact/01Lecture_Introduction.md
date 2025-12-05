# Lecture 1: **Introduction to React**

## 1. What is React?

React is a **JavaScript library** created by Facebook for building **user interfaces**, especially **single-page applications (SPAs)**.

React helps you:

* Build reusable UI components
* Handle dynamic data efficiently
* Create fast and interactive applications

React is declarative, component-based, and extremely popular in modern web development.

---

## 2. Features & Advantages of React

### **1. Component-Based Architecture**

Everything in React is a component — small, reusable pieces of UI.

### **2. Declarative UI**

You describe **what** the UI should look like, and React updates it automatically when data changes.

### **3. Virtual DOM**

React uses a lightweight copy of the actual DOM called the Virtual DOM for faster updates.

### **4. One-Way Data Flow**

Data flows from parent to child, making apps predictable and easier to debug.

### **5. Fast Rendering**

Thanks to Virtual DOM diffing and reconciliation.

### **6. Strong Community & Ecosystem**

Thousands of libraries, tools, and tutorials.

### **7. JSX (JavaScript XML)**

Allows writing HTML-like code inside JavaScript.

### **8. Rich Developer Tools**

React DevTools for debugging.

---

## 3. SPA (Single Page Application) & Virtual DOM

### **What is SPA?**

A Single Page Application loads a **single HTML page** and updates content dynamically without reloading the entire page.

Advantages:

* Faster navigation
* Smooth user experience
* Reduces server load

---

## What is Virtual DOM?

The Virtual DOM is a **lightweight JavaScript representation** of the real DOM.

### How React Uses the Virtual DOM:

1. UI changes create a new Virtual DOM tree.
2. React compares it with the previous tree (diffing).
3. Only changed parts are updated in the real DOM (patching).

This process makes React extremely fast.

---

## 4. Setting up React with Vite

Vite is the recommended tool for modern, fast React development.

### Step 1: Create a new project

```bash
npm create vite@latest my-react-app --template react
```

### Step 2: Install dependencies

```bash
cd my-react-app
npm install
```

### Step 3: Run the development server

```bash
npm run dev
```

Vite provides:

* Fast startup
* Hot Module Replacement (HMR)
* Very quick builds

---

## 5. Folder Structure Overview (Vite + React)

```
my-react-app/
│
├── node_modules/          # Dependencies
├── public/                # Static assets
├── src/                   # All React code
│   ├── assets/            # Images, icons, static files
│   ├── components/        # Reusable components
│   ├── App.jsx            # Root component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
│
├── .gitignore
├── package.json           # Metadata + dependencies
├── vite.config.js         # Vite configuration
└── README.md
```

### Key Files

* **main.jsx** → connects React to the DOM
* **App.jsx** → first UI component
* **components** folder → place to store reusable pieces
* **assets** folder → images or static files

---


