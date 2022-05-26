import { ITodo } from '../../context/todo/todo.types';

export interface ITodoItemProps {
  onChangeStatus: (createDate: Date) => void;
  onClickRemove: (createDate: Date) => void;
  todo: ITodo;
}
