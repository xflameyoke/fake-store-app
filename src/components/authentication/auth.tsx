import React, { useState } from 'react';
import { useFormik } from 'formik';
import './auth.scss';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';

const Auth = (props: { onLogin: React.MouseEventHandler<HTMLElement> }) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAutModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const error = { email: '', password: '' };

      if (!values.email) {
        error.email = 'Required';
      } else if (
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        error.email = 'Invalid email format';
      }

      if (!values.password) {
        error.password = 'Required';
      } else if (values.password.length < 8) {
        error.password = 'Password is too short';
      }

      return error;
    },
  });

  const onFinishFailed = () => {
    alert('Failed');
  };
  return (
    <div className="auth-container">
      <h1>{isLogin ? 'Login' : 'Sign up'}</h1>
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
          required
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
          required
        />
        <Button
          type="primary"
          htmlType="submit"
          className="form--button"
          onClick={props.onLogin}
        >
          {isLogin ? 'Login' : 'Register'}
        </Button>
        <Button
          onClick={switchAutModeHandler}
          type="text"
          className="form--button"
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </Button>
      </Form>
    </div>
  );
};

export default Auth;
