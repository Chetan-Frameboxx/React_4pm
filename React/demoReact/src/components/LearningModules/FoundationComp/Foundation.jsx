import React from 'react'
import { Link, Outlet } from 'react-router'

function Foundation() {
  return (
    <>
        <h2>Learning React Foundation</h2> 

        <ol>
          <li><Link className="text-black" to="foundation">Introduction</Link></li>
          {/* <li>Introduction</li> */}
          <li>JSX </li>
          <li>Components</li>
          <li>Props</li>
          <li>State</li>
          <li>Event Handling</li>
          <li>Conditional Rendering</li>
          <li>List And Keys</li>
          <li>Forms</li>
          <li>Styling</li>
        </ol>

         <div className="container border border-2">
            <Outlet/>
        </div>
    </>
  )
}

export default Foundation
