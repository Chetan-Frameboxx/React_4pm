# Interview Questions & Answers: Lists and Keys in React


---

## 1. How do you render a list in React?

**Answer:** The `map()` function is used to loop through an array and return JSX:

```jsx
const items = ["A", "B", "C"];
return items.map(item => <p>{item}</p>);
```

---

## 2. Why is `map()` commonly used in React list rendering?

**Answer:** `map()` transforms each array element into JSX, allowing React to efficiently generate repeated UI elements.

---

## 3. What are keys in React?

**Answer:** Keys are unique identifiers assigned to list items to help React track changes, additions, and removals in the list.

---

## 4. Why are keys important in list rendering?

**Answer:** Keys help React optimize re-rendering by identifying which items changed, improving performance and preventing bugs in dynamic lists.

---

## 5. What should you use as a key in React?

**Answer:** Ideally, a unique and stable value like `id`. Avoid using indexes unless the list is static.

```jsx
<li key={user.id}>{user.name}</li>
```

---

## 6. Why should you avoid using array indexes as keys?

**Answer:** Because indexes change when items are reordered or removed, causing React to mismatch elements, leading to unexpected UI behavior.

---

## 7. How do you dynamically render a list from API data?

**Answer:**

```jsx
users.map(user => (
  <div key={user.id}>{user.name}</div>
))
```

This works well when each item has a unique identifier.

---

## 8. What happens if you forget to add keys in a list?

**Answer:** React will show a console warning and may incorrectly track list changes, leading to inefficient renders and potential UI bugs.

---

## 9. Can two list items have the same key?

**Answer:** No. Keys must be unique within their list. Duplicate keys confuse React’s diffing algorithm.

---

## 10. Are keys accessible inside components as props?

**Answer:** No. Keys are internal to React and are not passed to the component. If needed, pass the identifier separately as a regular prop.
