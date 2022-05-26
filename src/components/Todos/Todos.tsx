import React from 'react';
import { TodoContext } from '../../context';
import { TodoContextType } from '../../context/todo/todo.types';
import TodoItem from './TodoItem';

export const Todos = () => {
  const { todos, updateTodo, removeTodo } = React.useContext(TodoContext) as TodoContextType;

  const onChangeStatus = (date: Date) => {
    updateTodo(date);
  };

  const onClickRemove = (date: Date) => {
    removeTodo(date);
  };

  return (
    <>
      {todos.map((todo) => (
        <TodoItem onChangeStatus={onChangeStatus} onClickRemove={onClickRemove} todo={todo} />
      ))}
    </>
  );
};
