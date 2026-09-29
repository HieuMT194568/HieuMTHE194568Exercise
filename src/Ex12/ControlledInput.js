import React, { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');

  return (
    <div className="container my-4">
      <h2>2. Controlled Input Field</h2>
      <input
        className="form-control"
        style={{ maxWidth: 400 }}
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}

export default ControlledInput;
