// TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../models/Todo';

type TodoListProps = {
  todos: Todo[];
  toggleStatus: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleStatus }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleStatus={toggleStatus} />
      ))}
    </div>
  );
};

export default TodoList;
