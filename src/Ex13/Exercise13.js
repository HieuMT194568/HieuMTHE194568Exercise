import React, { useState } from 'react';
import UserPosts from './UserPosts';
import CountdownTimer from './CountdownTimer';
import WindowSize from './WindowSize';
import ValidatedInput from './ValidatedInput';

// Declared outside the component so the function reference stays the same between renders
const validateEmail = (value) => value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function Exercise13() {
  const [userId, setUserId] = useState(1);
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <h1 className="container mt-4">Exercise 13: useEffect</h1>

      <div className="container my-4">
        <h2>1. Data Fetching</h2>
        <select className="form-select mb-3" style={{ maxWidth: 200 }} value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
        <UserPosts userId={userId} />
      </div>

      <div className="container my-4">
        <h2>2. Countdown Timer</h2>
        <button className="btn btn-secondary mb-2" onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? 'Unmount timer' : 'Mount timer'}
        </button>
        {showTimer && <CountdownTimer initialValue={10} />}
      </div>

      <div className="container my-4">
        <h2>3. Window Resize Listener</h2>
        <WindowSize />
      </div>

      <div className="container my-4">
        <h2>4. Form Input Validation</h2>
        <ValidatedInput validationFunction={validateEmail} errorMessage="Invalid email address" />
      </div>
    </>
  );
}

export default Exercise13;
