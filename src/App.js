import { useState } from 'react';
import './App.css';
import EsExercise from './Slot1/EsExercise.js';
import Ex4 from './Ex4/Ex4.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoButton from './SLot3/DemoReactBt.js';
import DemoState from './SLot3/DemoState.js';
import Layout from './Ex6/layout.js';
import CardsColumns from './Ex7/CardsColumns.js';
import FlightBookingForm from './Ex8/FlightBookingForm.js';
import Exercise9 from './Ex9/Exercise9.js';
function App() {
  // const [show, setShow] = useState(false);
  // const [showEx4, setShowEx4] = useState(false);

  return (
    <div>
      <Layout></Layout>
      <hr />
      <CardsColumns></CardsColumns>
      <hr />
      <FlightBookingForm></FlightBookingForm>
      <hr />
      <Exercise9></Exercise9>
    </div>
  );
}

export default App;
