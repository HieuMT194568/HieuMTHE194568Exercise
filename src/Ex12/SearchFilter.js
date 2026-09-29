import React, { useState } from 'react';

const items = ['React', 'Angular', 'Vue', 'Svelte', 'Next.js', 'Node.js', 'Express', 'Bootstrap'];

function SearchFilter() {
  const [query, setQuery] = useState('');

  const filtered = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container my-4">
      <h2>6. Search Filter</h2>
      <input
        className="form-control mb-3"
        style={{ maxWidth: 400 }}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list-group" style={{ maxWidth: 400 }}>
        {filtered.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
