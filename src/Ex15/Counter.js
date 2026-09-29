import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="container my-4">
      <h2>1. Counter</h2>
      <p className="fs-4">Count: {count}</p>
      <button className="btn btn-secondary me-2" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button className="btn btn-primary me-2" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button className="btn btn-outline-danger" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default Counter;
