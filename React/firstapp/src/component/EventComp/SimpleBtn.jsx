import React, { useState } from 'react'

function SimpleBtn() {
    const [name, setName] = useState('');

    const handleEvent =  () => {
        alert("Namaste React")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted Successfully!');
    };

  return (
    <>
    
    <div className='col text-bg-dark p-3 w-50 m-auto'>
        <h2 className='text-center text-decoration-underline'>Event Handling In React</h2>
      <button className='btn btn-info' onClick={() => alert("Hello React")}>Hello</button>
      <br /><br />
      <button className='btn btn-primary ' onClick={handleEvent}>Namaste</button>
      <br /><br />
    <form onSubmit={handleSubmit} className=" border border-3 p-2 ">
        <input type="text" className='form-control' placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        <br />
        <button className='btn btn-success ' type="submit">Submit</button>
    </form>
    <br /><br />
    <h2>Name = {name}</h2>

    </div>
    </>
  )
}

export default SimpleBtn
