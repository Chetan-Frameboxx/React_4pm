import React, { useEffect, useLayoutEffect, useState } from "react";

function CounterLayout() {
  const [count, setCount] = useState(0);
  const [padding, setPadding] = useState(10);


  useLayoutEffect(()=>{
    let i = 0;
    while (i < 10000000) {
      i++;
    }
    setPadding(padding + 30)
  }, [count])



  function handleIncrement() {
    setCount(count + 1)
  }

  // useEffect(() => {
  //   console.log("First");
  // }, []);

  // useLayoutEffect(() => {
  //   console.log("Second");
  // }, []);

  // useEffect(() => {
  //   console.log("Third");
  // }, []);

  return <>

    <div className="container p-3 text-center text-bg-dark">
      <h1>Count : {count}</h1>
      <h2 style={{paddingTop: `${padding}px`}}>useLayoutEffect</h2>
      <button onClick={handleIncrement} className="btn btn-primary">Click Increment</button>
    </div>

  </>;
}

export default CounterLayout;
