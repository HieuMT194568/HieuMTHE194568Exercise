import React from 'react';
import SimpleCard from './SimpleCard';
import student1 from '../asset/student1.jpg';
import student2 from '../asset/student2.jpg';
import student3 from '../asset/student3.jpg';
import student4 from '../asset/student4.jpg';

const items = [
  { id: 1, title: 'Student 1', description: 'A member of the FPT University class.', imageUrl: student1 },
  { id: 2, title: 'Student 2', description: 'A member of the FPT University class.', imageUrl: student2 },
  { id: 3, title: 'Student 3', description: 'A member of the FPT University class.', imageUrl: student3 },
  { id: 4, title: 'Student 4', description: 'A member of the FPT University class.', imageUrl: student4 },
];

function CardList() {
  return (
    <div className="container my-4">
      <h2>Simple Card</h2>
      <div className="d-flex flex-wrap gap-3">
        {items.map((item) => (
          <SimpleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
