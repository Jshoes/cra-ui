import React from "react";
import { Card, Form, Input, Button, Row, Col } from "antd";
import "antd/dist/antd.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function App() {
  function onFinish(values: Object) {
    const event = new CustomEvent('sendMessage', { detail: values });
    document.dispatchEvent(event);
  }
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card title="创建模块" bordered={false}>
          <Form onFinish={onFinish} style={{textAlign:'center'}}>
            <Form.Item
              label="模版名称"
              name="modelname"
              initialValue="modeltest"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="模版路径"
              name="modelpath"
              initialValue="/aaa/bbb/ccc"
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default App;
