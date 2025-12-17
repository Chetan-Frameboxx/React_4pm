import React, { useState } from 'react'
import GrandParent from './GrandParent'
import { CourseContext } from './ContextComp'

function GreatGrandParent() {
  const [course, setCourse] = useState("")


  return (
    <>
      <CourseContext.Provider value={course}>
        <div className="text-bg-dark p-3">

        <select onChange={(e) => setCourse(e.target.value)}  className="form-select w-25 my-2">
          <option value="">Select Course</option>
          <option value="Database">Database</option>
          <option value="Backend">Backend</option>
          <option value="Frontend">Frontend</option>
          <option value="Data Analysis">Data Analysis</option>
        </select>
            <h1>Great grand parent</h1>    
            <GrandParent/>
        </div> 
      </CourseContext.Provider>
    </>
  )
}

export default GreatGrandParent
