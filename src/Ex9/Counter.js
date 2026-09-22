import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-4">
      <h2>Counter: {count}</h2>
      <button className="btn btn-secondary me-2" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
