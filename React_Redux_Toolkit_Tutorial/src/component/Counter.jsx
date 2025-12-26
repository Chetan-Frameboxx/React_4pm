import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
      <div className="container border border-4 text-center py-5 text-bg-warning">
        <div>
          <button
          className="btn btn-primary"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button className="btn btn-info px-5 mx-2">{count}</button>
          <button
          className="btn btn-danger"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
