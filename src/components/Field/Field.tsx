import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Input, Button, Col, Row, notification } from 'antd';
import { TodoContext } from '../../context';
import { TodoContextType } from '../../context/todo/todo.types';

import styles from './Field.module.scss';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const openNotification = (type: NotificationType, message: string, description: string) => {
  notification[type]({
    message,
    description
  });
};

export const Field = () => {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;

  const [taskValue, setTaskValue] = useState<string>('');

  const onChangeTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setTaskValue('');
  }, []);

  const onCreate = useCallback(() => {
    if (!taskValue.length) return openNotification('warning', 'Warning', 'Input cannot be empty');
    saveTodo(taskValue);
    resetInput();
  }, [taskValue, saveTodo, resetInput]);

  return (
    <Row gutter={16} justify="space-between">
      <Col span="20">
        <Input value={taskValue} onChange={onChangeTask} onPressEnter={onCreate} />
      </Col>
      <Col span="4">
        <Button className={styles.createButton} onClick={onCreate}>
          Create
        </Button>
      </Col>
    </Row>
  );
};
