import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../features/counter/counterSlice'

function Card() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <>

<div className="container border border-4 text-center py-2 text-bg-dark my-2">
        <h2>Card</h2>
 <span>

          <button
            className="btn btn-primary"
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(10))}
            >Increment by 10</button>
          <button className="btn btn-info px-4 ms-3">{count}</button>
            </span>

</div>

    </>
  )
}

export default Card