import React from "react";
import { InputNumber, Input, Button, Select, Checkbox } from "antd";
import { selectType, buttonType ,placeholder} from "./dic";
import { dicts, renderSelectOption } from "./utils";
const ButtonGroup = Button.Group;

export const tableDataConfFn = (formRef: any) => {
  // function handleChangeSearch(e:any,row:any,instance:any,form:any){
  //   const {checked} = e.target
  //   const listData = formRef.getFieldValue('listData')
  //   const {dataIndex} = form.getFieldsValue()

  //   if(checked){
  //     formRef.setFieldsValue({
  //       listData:[...listData,{
  //         name:dataIndex,
  //         type:'input'
  //       }]
  //     })
  //   }else{
  //     formRef.setFieldsValue({
  //       listData:listData.filter((it:any)=>it.name!==dataIndex)
  //     })
  //   }
  //   console.log(instance,formRef.getFieldsValue())
  // }

  return {
    onChange: (data: any) => {
      console.log(data);
    },
    data: [],
    columns: [
      {
        name: "dataIndex",
        title: "字段key",
        dataIndex: "dataIndex",
        editingStatus: false,
        renderCol: (text: any, row: any, instance: any) => text,
        key: "dataIndex",
        editComponent: () => <Input {...placeholder('input')}/>,
      },
      {
        name: "width",
        title: "列宽",
        dataIndex: "width",
        editingStatus: false,
        renderCol: (text: any, row: any, instance: any) => text,
        key: "width",
        editComponent: () => <InputNumber {...placeholder('input')}/>,
      },
      {
        name: "isEillipsis",
        title: "是否截字",
        dataIndex: "isEillipsis",
        editingStatus: false,
        renderCol: (text: any, row: any, instance: any) => (text ? "是" : "否"),
        key: "isEillipsis",
        editComponent: (text: any) => <Checkbox defaultChecked={text} />,
      },
      // {
      //   name: "isSearch",
      //   title: "是否查询",
      //   dataIndex: "isSearch",
      //   editingStatus: false,
      //   renderCol: (text: any, row: any, instance: any) => (text ? "是" : "否"),
      //   key: "isSearch",
      //   editComponent: (text:any,row:any,instance:any,form:any) => <Checkbox onChange={(e)=>handleChangeSearch(e,row,instance,form)} defaultChecked={text}/>,
      // },
      {
        name: "caozuo",
        title: "操作",
        dataIndex: "caozuo",
        editingStatus: false,
        renderCol: (text: any, row: any, instance: any) => {
          return (
            <ButtonGroup>
              <Button onClick={() => instance.edit(row.key)}>edit</Button>
              <Button onClick={() => instance.delete(row.key)}>delete</Button>
            </ButtonGroup>
          );
        },
        key: "caozuo",
        editComponent: (text: any, row: any, instance: any, form: any) => {
          return (
            <ButtonGroup>
              <Button onClick={() => instance.save(form, row.key)}>save</Button>
              <Button onClick={() => instance.cancel(form, row.key)}>
                cancel
              </Button>
            </ButtonGroup>
          );
        },
      },
    ],
  };
};

export const listDataConfFn = (formRef: any) => ({
  onChange: (data: any) => {
    console.log(data);
  },
  data: formRef.getFieldValue("listData"),
  columns: [
    {
      name: "name",
      title: "查询字段name",
      dataIndex: "name",
      editingStatus: false,
      renderCol: (text: any, row: any, instance: any) => text,
      key: "name",
      editComponent: () => <Input {...placeholder('input')}/>,
    },
    {
      name: "type",
      title: "组件类型",
      dataIndex: "type",
      editingStatus: false,
      renderCol: (text: any, row: any, instance: any) =>
        dicts(selectType, text),
      key: "type",
      editComponent: () => (
        <Select style={{ width: 120 }} defaultValue='input' {...placeholder('select')}>{renderSelectOption(selectType)}</Select>
      ),
    },
    {
      name: "caozuo",
      title: "操作",
      dataIndex: "caozuo",
      editingStatus: false,
      renderCol: (text: any, row: any, instance: any) => {
        return (
          <ButtonGroup>
            <Button onClick={() => instance.edit(row.key)}>edit</Button>
            <Button onClick={() => instance.delete(row.key)}>delete</Button>
          </ButtonGroup>
        );
      },
      key: "caozuo",
      editComponent: (text: any, row: any, instance: any, form: any) => {
        return (
          <ButtonGroup>
            <Button onClick={() => instance.save(form, row.key)}>save</Button>
            <Button onClick={() => instance.cancel(form, row.key)}>
              cancel
            </Button>
          </ButtonGroup>
        );
      },
    },
  ],
});

export const buttonDataConf = {
  onChange: (data: any) => {
    console.log(data);
  },
  data: [],
  columns: [
    {
      name: "name",
      title: "按钮名称",
      dataIndex: "name",
      editingStatus: false,
      renderCol: (text: any, row: any, instance: any) => text,
      key: "name",
      editComponent: () => <Input {...placeholder('input')}/>,
    },
    {
      name: "type",
      title: "按钮类型",
      dataIndex: "type",
      editingStatus: false,
      renderCol: (text: any, row: any, instance: any) => text,
      key: "type",
      editComponent: () => (
        <Select style={{ width: 120 }} defaultValue='default' {...placeholder('select')}>
          {renderSelectOption(buttonType)}
        </Select>
      ),
    },
    {
      name: "actionKey",
      title: "actionKey",
      dataIndex: "actionKey",
      editingStatus: false,
      renderCol: (text: any, row: any, instance: any) => text,
      key: "actionKey",
      editComponent: () => <Input {...placeholder('input')}/>,
    },
    {
      name: "caozuo",
      title: "操作",
      dataIndex: "caozuo",
      editingStatus: false,
      renderCol: (text: any, row: any, instance: any) => {
        return (
          <ButtonGroup>
            <Button onClick={() => instance.edit(row.key)}>edit</Button>
            <Button onClick={() => instance.delete(row.key)}>delete</Button>
          </ButtonGroup>
        );
      },
      key: "caozuo",
      editComponent: (text: any, row: any, instance: any, form: any) => {
        return (
          <ButtonGroup>
            <Button onClick={() => instance.save(form, row.key)}>save</Button>
            <Button onClick={() => instance.cancel(form, row.key)}>
              cancel
            </Button>
          </ButtonGroup>
        );
      },
    },
  ],
};
