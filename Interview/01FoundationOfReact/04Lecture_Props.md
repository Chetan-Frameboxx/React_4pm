# Interview Questions & Answers: React Props (Properties)


---

## 1. What are props in React?

**Answer:** Props (short for properties) are read-only inputs passed from a parent component to a child component to provide data and configuration. They help make components dynamic and reusable.

---

## 2. How do you pass data from a parent component to a child component?

**Answer:** Data is passed using attributes in JSX:

```jsx
<Profile name="Chetan" age={25} />
```

Inside the child component:

```jsx
function Profile(props) {
  return <p>{props.name}</p>;
}
```

---

## 3. How do you access and use props in JSX?

**Answer:** Props are accessed using `props.propertyName` in functional components or destructuring:

```jsx
function Profile({ name, age }) {
  return <p>{name} - {age}</p>;
}
```

---

## 4. Are props immutable or mutable?

**Answer:** Props are **immutable**. A component cannot modify the props it receives. Only the parent component can change the values.

---

## 5. What are default props?

**Answer:** Default props provide fallback values when a parent component does not pass a required prop.
Example:

```jsx
Profile.defaultProps = {
  name: "Guest",
};
```

---

## 6. What is the difference between props and variables?

**Answer:**

* **Props** come from the parent and are read-only.
* **Variables** are declared inside the component and can change within that component.

Props determine how a component behaves externally, while variables handle internal logic.

---

## 7. Can props be functions?

**Answer:** Yes. Props can contain functions passed from a parent to a child component, allowing communication and event handling.
Example:

```jsx
<Child onClick={handleClick} />
```

---

## 8. What is props drilling?

**Answer:** Props drilling occurs when data is passed down through multiple nested components even though only the deepest component needs it. This can make the code harder to manage.

---

## 9. How can props drilling be avoided?

**Answer:** Props drilling can be avoided using:

* React Context API
* Redux or other state management libraries
* Custom hooks for shared logic

---

## 10. What happens if you pass a number or boolean as props?

**Answer:** They must be wrapped in curly braces:

```jsx
<Counter start={0} isActive={true} />
```

React automatically treats them as JavaScript expressions, not strings.
