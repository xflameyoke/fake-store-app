import React, { useState } from 'react';
import { useFormik } from 'formik';
import './auth.scss';
import { Button, Form, Input } from 'antd';
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

  const onFinishFailed = () => {
    alert('Failed');
  };
  return (
    <div className="auth-container">
      <Form
        className="form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={formik.handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <label htmlFor="email" className="form--label">
          Email
        </label>
        <Input
          className="form--input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password" className="form--label">
          Password
        </label>
        <Input
          className="form--input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="primary" htmlType="submit" className="form--button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Auth;
