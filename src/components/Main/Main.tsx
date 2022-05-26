import React from 'react';
import { Row, Col } from 'antd';
import { Field } from '../Field/Field';
import { Todos } from '../Todos/Todos';

export const Main = () => {
  return (
    <>
      <Row justify="center" className="mt-100">
        <Col span="12">
          <Field />
        </Col>
      </Row>
      <Row justify="center" className="mt-100">
        <Col span="12">
          <Todos />
        </Col>
      </Row>
    </>
  );
};
