import React, { useEffect, useState } from 'react';

function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div style={{ maxWidth: 400 }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`form-control ${isValid ? '' : 'is-invalid'}`}
        placeholder="Enter your email"
      />
      {!isValid && <p className="text-danger mt-1">{errorMessage}</p>}
    </div>
  );
}

export default ValidatedInput;
