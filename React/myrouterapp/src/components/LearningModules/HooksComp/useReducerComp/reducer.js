export default function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    case 'IncrementByFive':
      return state + 5;
    default:
      return state;
  }
}
