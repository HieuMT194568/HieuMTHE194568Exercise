import React from 'react';
import student1 from '../asset/student1.jpg';
import student2 from '../asset/student2.jpg';
import student3 from '../asset/student3.jpg';
import './CardsColumns.css';

const cards = [
  { id: 1, border: 'primary', img: student1, text: 'Some text inside the first card' },
  { id: 2, border: 'warning', img: student2, text: 'Some text inside the first card' },
  { id: 3, border: 'danger', img: student3, text: 'Some text inside the first card' },
];

function CardsColumns() {
  return (
    <div className="container my-4">
      <h1>Cards Columns</h1>
      <div className="row g-3">
        {cards.map((c) => (
          <div className="col-md-4" key={c.id}>
            <div className={`card border-${c.border} bg-${c.border} text-center`}>
              <img src={c.img} className="card-img-top cards-columns-img" alt="card" />
              <div className="card-body bg-white">
                <p className="card-text">{c.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsColumns;
