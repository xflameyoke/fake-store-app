import React, { useState } from 'react';
import { useFormik } from 'formik';
import './auth.scss';
import { Button, Form } from 'antd';
import 'antd/dist/antd.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values.email, values.password);
    },
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={formik.handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Auth;
