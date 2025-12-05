import React, { useContext } from "react";
import ChildComp from "./ChildComp";
// import { CourseContext } from "./ContextComp";

function ParentComp() {
  // const course = useContext(CourseContext)
  return (
    <>
      <div className="text-bg-info p-3">
        <h1>Parent </h1>
        {/* <h1>Parent : {course}</h1> */}
        <ChildComp />
      </div>
    </>
  );
}

export default ParentComp;
