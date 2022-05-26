import { Row, Col, Space, Checkbox, Tooltip, Button, Divider, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { ITodoItemProps } from './Todos.types';

import styles from './Todos.module.scss';

const { Text } = Typography;

const TodoItem = (props: ITodoItemProps) => {
  const { onChangeStatus, onClickRemove, todo } = props;

  return (
    <Row>
      <Col span="24">
        <Space className={styles.todoSpace}>
          <Checkbox checked={todo.status} onChange={() => onChangeStatus(todo.createDate)} />
          <Text
            className={styles.todoTitle}
            type={todo.status ? 'success' : 'secondary'}
            strong
            delete={todo.status}
            key={+todo.createDate}
          >
            {todo.title}
          </Text>
          <Tooltip title="remove task">
            <Button
              size="small"
              type="ghost"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => onClickRemove(todo.createDate)}
            />
          </Tooltip>
        </Space>
        <Divider />
      </Col>
    </Row>
  );
};

export default TodoItem;
