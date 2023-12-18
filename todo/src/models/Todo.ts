// models/Todo.ts

type TodoStatus = 'Hacer' | 'Haciendo' | 'Completado';

type Todo = {
  id: number;
  name: string;
  status: TodoStatus;
};

export type { Todo, TodoStatus };