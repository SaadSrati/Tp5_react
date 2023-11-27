import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SuperstarComponent() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="Appcs">
      <h1 className='hh1'>Tp4react</h1>
      <ul className='ul2'>
        {todos.map(todo => (
          <li key={todo.id} className='li2'>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} className='btn3'>Précédent</button>
      <button onClick={handleNextPage} className='btn3'>Suivant</button>
    </div>
  );
}

export default SuperstarComponent;

