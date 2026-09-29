import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-4">
      <h2>1. Counter</h2>
      <p className="fs-4">Count: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
