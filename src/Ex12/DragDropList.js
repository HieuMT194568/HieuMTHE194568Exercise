import React, { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggingItem === null) return;
    const newItems = [...items];
    const [moved] = newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, moved);
    setItems(newItems);
    setDraggingItem(null);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div className="container my-4">
      <h2>7. Drag and Drop List</h2>
      <ul className="list-group" style={{ maxWidth: 400 }}>
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item ${draggingItem === index ? 'active' : ''}`}
            style={{ cursor: 'move' }}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;
