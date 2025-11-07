import React from 'react'

function Greet(props) {
// function Greet({name, onGreet}) {
  return (
    <div>
      <h2>Namaste {props.name}</h2>
      <button className='btn btn-primary' onClick={props.onGreet}>Click Me</button>
      {/* <h2>Namaste {name}</h2>
      <button className='btn btn-primary' onClick={onGreet}>Click Me</button> */}
    </div>
  )
}

export default Greet
