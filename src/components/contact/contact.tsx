import React from 'react';
import { Button, Form, Input } from 'antd';
import './contact.scss';

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
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div className="contact">
      <h1>Contact me via e-mail</h1>
      <Form
        className="contact__form"
        name="contact"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input className="form__input" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input className="form__input" />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, min: 10, max: 250 }]}
        >
          <Input className="form__input--message" />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
