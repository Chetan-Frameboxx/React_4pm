import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice";

function Navbar() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <span>

          <button
            className="btn btn-primary"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >Increment</button>
          <button className="btn btn-info px-4 ms-3">{count}</button>
            </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
