import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Icategory } from "../../interface/Icategory";
interface CategoryAdd {
  addCategory: (category: Icategory) => void;
}
const CategoryAdd = (props: CategoryAdd) => {
  const onFinish = (values: any) => {
    props.addCategory(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name Category"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryAdd;
