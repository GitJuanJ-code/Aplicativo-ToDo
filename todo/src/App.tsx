import { useState } from 'react';
import './index.css';
import TodoList from './components/TodoList';

type TodoStatus = 'Hacer' | 'Haciendo' | 'Completado';

type Todo = {
  id: number;
  name: string;
  status: TodoStatus;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      name,
      status: 'Hacer',
    };
    setTodos([...todos, newTodo]);
  };

  const toggleStatus = (id: number) => {
    const updatedTodos: Todo[] = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status:
            todo.status === 'Hacer'
              ? 'Haciendo'
              : todo.status === 'Haciendo'
              ? 'Completado'
              : 'Hacer',
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeCompletedTodos = () => {
    const updatedTodos = todos.filter(todo => todo.status !== 'Completado');
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Aplicación TODO</h1>
      <input
        className="input-field"
        placeholder="Nueva tarea"
        onBlur={e => addTodo(e.target.value)}
      />
      <div className="header">
        <span>Nombre</span>
        <span>Estado</span>
      </div>
      <TodoList todos={todos} toggleStatus={toggleStatus} />
      <button className="delete-button" onClick={removeCompletedTodos}>
        Eliminar completados
      </button>
    </div>
  );
}

export default App;
