import { useState } from 'react';
import './App.css';
import EsExercise from './Slot1/EsExercise.js';
import Ex4 from './Ex4/Ex4.js';

function App() {
  const [show, setShow] = useState(false);
  const [showEx4, setShowEx4] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>Press me!</button>
      <button onClick={() => setShowEx4(prev => !prev)}>Exercise 4</button>
      {show && <EsExercise />}
      {showEx4 && <Ex4 />}
    </div>
  );
}

export default App;
