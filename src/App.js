import './App.css';
import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Travel' },
    { id: 2, name: 'Shopping' },
    { id: 6, name: 'Shopping' },
    { id: 7, name: 'Shopping' },
    { id: 9, name: 'Shopping' },
    { id: 12, name: 'Shopping' },
    { id: 17, name: 'Shopping' }
  ]);

  // todos[0];
  // todos[1];
  // todos[todos.length - 1].id + 1; // 18
  // todos[0].id = 1;

  console.log(todos);

  const addTodo = newTodo => {
    const newItem = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      name: newTodo
    };

    const newTodos = [...todos, newItem];
    setTodos(newTodos);
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          marginTop: '1rem'
        }}
      >
        {todos.map(item => (
          <Todo key={item.id} todo={item} />
        ))}
      </ul>
    </>
  );
}

export default App;
