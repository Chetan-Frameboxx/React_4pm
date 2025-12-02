import React, { useState } from 'react'

function Counter() {

    const [name, setName] = useState("Rohan");
    const [count, setCount] = useState(0);

    // let name ="Rohan";

    const handleChange = () => {
        // let name ="Hiren";
        setName("Hiren")
        setCount(prev => prev + 1);
        console.log(name);
        
    }

  return (
    <>
    <div className="container text-bg-warning p-3">

        <h1>Learning useState Hook</h1>

        <h2>{name}</h2>
        <h2>{count}</h2>

        <button className='btn btn-primary' onClick={handleChange}>Change The Name</button>

    </div>


    </>
  )
}

export default Counter
