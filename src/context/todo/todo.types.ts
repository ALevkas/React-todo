export interface ITodo {
  title: string;
  status: boolean;

  createDate: Date;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (title: string) => void;
  updateTodo: (date: Date) => void;
  removeTodo: (date: Date) => void;
};
