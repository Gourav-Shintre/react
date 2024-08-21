// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');
//   const [editId, setEditId] = useState(null);

//   const addTodo = () => {
//     if (input.trim()) {
//       if (editId) {
//         setTodos(todos.map(todo => todo.id === editId ? { ...todo, text: input } : todo));
//         setEditId(null);
//       } else {
//         setTodos([...todos, { id: Date.now(), text: input }]);
//       }
//       setInput('');
//     }
//   };

//   const removeTodo = id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const editTodo = id => {
//     const todo = todos.find(todo => todo.id === id);
//     setInput(todo.text);
//     setEditId(id);
//   };

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a new to-do"
//         />
//         <button className="add" onClick={addTodo}>
//           {editId ? 'Update' : 'Add'}
//         </button>
//       </div>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             {todo.text}
//             <div className="button-container">
//               <button className="edit" onClick={() => editTodo(todo.id)}>Edit</button>
//               <button className="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (input.trim()) {
      if (editId) {
        setTodos(todos.map(todo => 
          todo.id === editId ? { ...todo, text: input } : todo
        ));
        setEditId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      }
      setInput('');
    }
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = id => {
    const todo = todos.find(todo => todo.id === id);
    setInput(todo.text);
    setEditId(id);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new to-do"
        />
        <button className="add" onClick={addTodo}>
          {editId ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.text}
            <div className="button-container">
              <button className="edit" onClick={() => editTodo(todo.id)}>Edit</button>
              <button className="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
