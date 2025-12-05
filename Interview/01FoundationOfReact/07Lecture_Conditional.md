# Interview Questions & Answers: Conditional Rendering in React


---

## 1. What is conditional rendering in React?

**Answer:** Conditional rendering means showing or hiding UI elements based on conditions. React renders components depending on the application's state or logic.

---

## 2. How do you perform conditional rendering using `if-else`?

**Answer:** You can use an `if-else` statement inside the component before the return statement:

```jsx
if (isLoggedIn) {
  return <Dashboard />;
} else {
  return <Login />;
}
```

---

## 3. How does the ternary operator help in rendering conditionally?

**Answer:** The ternary operator is used inside JSX:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

It is concise and ideal for inline conditions.

---

## 4. When should you use the `&&` operator in React?

**Answer:** Use `&&` when you want to render something only when a condition is true:

```jsx
{showMessage && <p>Hello User</p>}
```

If `showMessage` is false, nothing is rendered.

---

## 5. Can we use functions to handle conditional rendering?

**Answer:** Yes. Logic can be wrapped in functions to keep JSX clean:

```jsx
function renderContent() {
  return isLoggedIn ? <Dashboard /> : <Login />;
}
return <div>{renderContent()}</div>;
```

---

## 6. How do you conditionally apply CSS classes?

**Answer:** Using ternary or template literals:

```jsx
<div className={active ? "box active" : "box"}></div>
```

---

## 7. How do you conditionally render components inside events?

**Answer:** Update state inside an event and render UI based on updated state:

```jsx
<button onClick={() => setShow(!show)}>Toggle</button>
{show && <Content />}
```

---

## 8. What is a common Conditional Rendering example using Login/Logout?

**Answer:**

```jsx
{isLoggedIn ? (
  <button onClick={logout}>Logout</button>
) : (
  <button onClick={login}>Login</button>
)}
```

It toggles UI based on login status.

---

## 9. Which conditional technique should be avoided when conditions get complex?

**Answer:** Deeply nested ternary operators should be avoided because they reduce readability. Instead, use separate functions or `if-else` outside JSX.

---

## 10. Why is conditional rendering important in React?

**Answer:** It enables dynamic UI updates based on user interactions, authentication, form validation, API responses, and application states—making applications interactive and user-friendly.
