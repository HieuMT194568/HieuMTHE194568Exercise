import React, { useState } from 'react';

const items = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon'];

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h2>3. Search Filter</h2>
      <input
        className="form-control mb-3"
        style={{ maxWidth: 400 }}
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-group" style={{ maxWidth: 400 }}>
        {filteredItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
        {filteredItems.length === 0 && <li className="list-group-item text-muted">No results found</li>}
      </ul>
    </div>
  );
}

export default SearchFilter;
