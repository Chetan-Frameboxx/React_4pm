# Lecture 22: useLayoutEffect Hook

---

## Theory

### What is useLayoutEffect?

`useLayoutEffect` is a React Hook that works similarly to `useEffect`, but it runs **synchronously after all DOM mutations and before the browser paints the screen**.

This makes it useful when:

* You need to **measure DOM elements** (width, height, position)
* You must **update layout immediately** to avoid flicker
* UI must be adjusted **before the user sees it**

```js
useLayoutEffect(() => {
  // DOM measurement or layout logic
}, [dependencies]);
```

---

### Difference Between useEffect and useLayoutEffect

| Feature          | useEffect             | useLayoutEffect      |
| ---------------- | --------------------- | -------------------- |
| Execution timing | After browser paint   | Before browser paint |
| Blocking UI      | No                    | Yes (blocks paint)   |
| DOM measurement  | Can cause flicker     | Accurate, no flicker |
| Performance      | Better for most cases | Use carefully        |

**Rule of thumb:**

* Use `useEffect` by default
* Use `useLayoutEffect` only when DOM measurement or layout sync is required

---

### Measuring DOM Elements

`useLayoutEffect` ensures that DOM values like:

* `offsetWidth`
* `offsetHeight`
* `getBoundingClientRect()`

are **read before paint**, preventing incorrect measurements or visual jumps.

---

### Real-time Layout Adjustments

Used when:

* Positioning tooltips, modals, dropdowns
* Syncing element size with another component
* Animations that depend on layout

---

## Practical Examples (Full Programs)

### Example 1: Measuring Element Width

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function BoxWidth() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "200px", height: "100px", background: "lightblue" }}
      />
      <p>Box width: {width}px</p>
    </div>
  );
}

export default BoxWidth;
```

---

### Example 2: Preventing UI Flicker

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function CenterBox() {
  const ref = useRef(null);
  const [left, setLeft] = useState(0);

  useLayoutEffect(() => {
    const width = ref.current.offsetWidth;
    setLeft((window.innerWidth - width) / 2);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: left,
        top: 100,
        background: "orange",
        padding: 20
      }}
    >
      Centered Box
    </div>
  );
}

export default CenterBox;
```

---

### Example 3: Tooltip Position Adjustment

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function Tooltip() {
  const tooltipRef = useRef(null);
  const [top, setTop] = useState(0);

  useLayoutEffect(() => {
    const rect = tooltipRef.current.getBoundingClientRect();
    setTop(rect.top - 10);
  }, []);

  return (
    <div>
      <div ref={tooltipRef} style={{ marginTop: 100 }}>
        Hover me
      </div>
      <div style={{ position: "absolute", top }}>
        Tooltip
      </div>
    </div>
  );
}

export default Tooltip;
```

---

## Practice Tasks

1. Create a component that displays the height of a div using `useLayoutEffect`.

2. Build a modal that calculates its center position before rendering.

3. Create a sidebar that adjusts its width based on window size using `useLayoutEffect`.

4. Measure the position of a button and display a tooltip above it without flicker.

5. Compare the same DOM measurement logic using `useEffect` and `useLayoutEffect` and observe the difference.

---

## Key Takeaways

* `useLayoutEffect` runs before browser paint
* Best for DOM measurement and layout sync
* Can block rendering, so avoid unnecessary usage
* Default to `useEffect` unless layout precision is required

---

