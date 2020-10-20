import React from "react";
import { Card, Form, Input, Button, Row, Col } from "antd";
import {EditTable} from '@mcfed/components'
import "antd/dist/antd.css";
import {tableDataConfFn,listDataConfFn,buttonDataConf} from './tableConfig'


function App() {
  const [form] = Form.useForm()
  function onFinish(values: Object) {
    console.log(values);
    const event = new CustomEvent('sendMessage', { detail: values });
    document.dispatchEvent(event);
  }
  const tableDataConf = tableDataConfFn(form)
  const listDataConf = listDataConfFn(form)
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card title="创建模块" bordered={false}>
          <Form onFinish={onFinish} form={form} style={{textAlign:'center'}}>
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
            <Form.Item label="自定义列表" name="tabelData" initialValue={[]}>
              <EditTable {...tableDataConf} onChange={(data: any)=>form.setFieldsValue({
                tabelData:data
              })} data={form.getFieldValue('tabelData')}/>
            </Form.Item>
            <Form.Item label="列表查询" name="listData" initialValue={[]}>
              <EditTable {...listDataConf} onChange={(data: any)=>form.setFieldsValue({
                listData:data
              })} />
            </Form.Item>
            <Form.Item label="工具按钮" name="buttonData" initialValue={[]}>
              <EditTable {...buttonDataConf} onChange={(data: any)=>form.setFieldsValue({
                buttonData:data
              })} data={form.getFieldValue('buttonData')}/>
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
