import React, { useState } from 'react'

function Counter() {
     const [count, setCount] = useState(0);

     const handleIncrement = () => {
        setCount(count + 1)
     }



  return (
    <>
    <div className="col text-bg-dark p-3 w-50 m-auto">

      <h1 className='text-center text-decoration-underline'>Counter APP</h1>
    <hr />
    <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrement</button>
    <button className='btn btn-light mx-3'>{count}</button>
    <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>

    </div>
    </>
  )
}

export default Counter
