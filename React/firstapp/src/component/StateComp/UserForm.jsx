import React, { useState } from 'react'

function UserForm() {
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')

  return (
    <>
      <div className="col text-bg-danger p-3 w-50 m-auto">
      <h1 className='text-center text-decoration-underline'>User Form App</h1>
<hr />
        <label htmlFor="userName" className='form-label'>UserName</label>
        {/* <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)}/> */}
        <input type="text" className='form-control ' value={name} />
        <label htmlFor="userName" className='form-label'>UserPass</label>
        <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button className='btn btn-primary mt-3'>Submit</button>
      </div>

        {/* Display  */}


        <div className="col text-bg-success p-3 w-50 m-auto">
            <h2>User Name = {name}</h2>
            <h2>User Pass = {email}</h2>
        </div>



    </>
  )
}
export default UserForm
