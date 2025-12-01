import React from 'react'
import { Link, Outlet } from 'react-router'

function FoundationMenu() {
  return (
    <>
      
        <h1>Foundation Of React</h1> 
        <ol>
          <li><Link className="text-black" to="foundation">Introduction</Link></li>
          <li><Link className="text-black" to="foundation">JSX</Link></li>
          <li><Link className="text-black" to="foundation">Components</Link></li>
          <li><Link className="text-black" to="foundation">Props</Link></li>
          <li><Link className="text-black" to="foundation">State</Link></li>
          <li><Link className="text-black" to="foundation">Event Handling</Link></li>
          <li><Link className="text-black" to="foundation">Conditional Rendering</Link></li>
          <li><Link className="text-black" to="foundation">List And Keys</Link></li>
          <li><Link className="text-black" to="foundation">Forms</Link></li>
          <li><Link className="text-black" to="foundation">Styling</Link></li>
        </ol>


        <div className="container border border-2">
            <Outlet/>
        </div>
    </>
  )
}

export default FoundationMenu
