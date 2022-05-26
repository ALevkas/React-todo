import React, { useState } from 'react';
import { ITodo, TodoContextType } from './todo.types';

const TodoContext = React.createContext<TodoContextType | null>(null);

interface ITodoProviderProps {
  children?: React.ReactNode;
}

const TodoProvider: React.FC<ITodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const saveTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      status: false,
      createDate: new Date()
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = (date: Date) => {
    todos.filter((todo: ITodo) => {
      if (todo.createDate === date) {
        todo.status = !todo.status;
        setTodos([...todos]);
      }
    });
  };

  const removeTodo = (date: Date) => {
    const removedTodos = todos.filter((todo: ITodo) => todo.createDate !== date);

    setTodos([...removedTodos]);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
