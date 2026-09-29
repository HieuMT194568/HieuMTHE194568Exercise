import React, { useEffect, useState } from 'react';

function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return <p className="fs-4">Time Remaining: {timeRemaining}</p>;
}

export default CountdownTimer;
