import React, { useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow'];

function ColorSwitcher() {
  const [color, setColor] = useState(colors[0]);

  return (
    <div className="container my-4">
      <h2>5. Color Switcher</h2>
      <select className="form-select mb-3" style={{ maxWidth: 200 }} value={color} onChange={(e) => setColor(e.target.value)}>
        {colors.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <div style={{ width: 200, height: 200, backgroundColor: color, border: '1px solid #ccc' }}></div>
    </div>
  );
}

export default ColorSwitcher;
