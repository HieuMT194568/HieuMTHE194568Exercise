import React from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';
import './SimpleCard.css';

function SimpleCard({ item }) {
  return (
    <div className="card simple-card">
      <Image url={item.imageUrl} />
      <div className="card-body">
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
}

export default SimpleCard;
