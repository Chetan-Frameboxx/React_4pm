import React from 'react'
import ParentComp from './ParentComp'

function GrandParent() {
  return (
    <>
       <div className="text-bg-warning p-3">
            <h1>Grand parent</h1>    
            <ParentComp/>
        </div> 
    </>
  )
}

export default GrandParent
