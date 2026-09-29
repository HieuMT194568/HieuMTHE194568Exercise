import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo.trim()]);
    setNewTodo('');
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container my-4">
      <h2>4. Todo List</h2>
      <div className="input-group mb-3" style={{ maxWidth: 500 }}>
        <input
          className="form-control"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add Todo</button>
      </div>
      <ul className="list-group" style={{ maxWidth: 500 }}>
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
