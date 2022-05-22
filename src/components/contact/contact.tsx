import React from 'react';
import { Button, Form, Input } from 'antd';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    name: '${label} is not a valid name!',
    message: '${label} is not a vaild message!',
  },
};

const Contact = () => {
  const onFinish = (values: string) => {
    console.log(values);
  };

  return (
    <Form
      name="contact"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, min: 10, max: 250 }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Send
      </Button>
    </Form>
  );
};

export default Contact;
