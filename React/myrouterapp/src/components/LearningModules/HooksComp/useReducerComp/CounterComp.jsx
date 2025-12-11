import { useReducer } from 'react';
import reducer from './reducer';

// function reducer(state, action) {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     case 'RESET':
//       return 0;
//     case 'IncrementByFive':
//       return state + 5;
//     default:
//       return state;
//   }
// }

export default function CounterComp() {
  const [count, dispatch] = useReducer(reducer, 5);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button className='btn btn-success' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button className='btn btn-danger mx-3' onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button className='btn btn-info' onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button className='btn btn-info' onClick={() => dispatch({ type: 'IncrementByFive' })}>5 +</button>
    </div>
  );
}