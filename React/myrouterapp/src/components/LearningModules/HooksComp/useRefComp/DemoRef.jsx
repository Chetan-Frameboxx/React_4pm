import React, { useRef, useState } from "react";
import Timer from "./Timer";

function DemoRef() {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  const inputRef = useRef();

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State : ", count);
    console.log("countRef : ", countRef.current);
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>Learning useRef In React</h1>

      <h2>Count {count}</h2>
       <p>Component Rendered: {countRef.current} times</p>
      <button className="btn btn-primary my-2" onClick={handleIncrement}>
        Increment
      </button>
    <hr />
      <input ref={inputRef} className="form-control" placeholder="Type here" />
      <button onClick={handleFocus} className="my-2 ml-2 p-2 border rounded">
        Focus Input
      </button>

<hr />
<Timer/>

    </>
  );
}

export default DemoRef;
