import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container my-4">
      <h2>3. Toggle Visibility</h2>
      <button className="btn btn-secondary" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p className="mt-2">Hello! Now you can see me.</p>}
    </div>
  );
}

export default ToggleVisibility;
