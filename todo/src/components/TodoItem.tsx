// TodoItem.tsx
import React from 'react';
import { Todo } from '../models/Todo';
type TodoItemProps = {
  todo: Todo;
  toggleStatus: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleStatus }) => {
  return (
    <div className="todo-item" key={todo.id}>
      <span>{todo.name}</span>
      <span className={`status-${todo.status}`}>
        {todo.status === 'Hacer' ? 'Por hacer' : todo.status === 'Haciendo' ? 'En progreso' : 'Completado'}
      </span>
      <button className="status-button" onClick={() => toggleStatus(todo.id)}>
        {todo.status === 'Completado' ? '○' : '●'}
      </button>
    </div>
  );
};

export default TodoItem;
