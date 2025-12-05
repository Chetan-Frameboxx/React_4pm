import React, { useContext } from 'react'
import { CourseContext } from './ContextComp'

function ChildComp() {

    const course = useContext(CourseContext)

  return (
    <>
      <div className="text-bg-success p-3">
            <h1>Child Component</h1>    
            <p>Course Name : {course}</p>
        </div> 
    </>
  )
}

export default ChildComp
