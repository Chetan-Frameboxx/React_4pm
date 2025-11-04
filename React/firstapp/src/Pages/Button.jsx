import React from 'react'

function Button() {
    const handleBtn = () => {
        alert("Hello Dost")
    }
  return (
    <div>
      <button className='btn btn-primary' onClick={handleBtn}>ClickMe</button>
    </div>
  )
}

export default Button
