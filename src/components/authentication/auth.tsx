import React, { useState } from 'react';
import { useFormik } from 'formik';
import './auth.scss';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAutModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const enteredEmail = formik.values.email;
    const enteredPassword = formik.values.password;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(formik.values);
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
        <Button type="primary" htmlType="submit" className="form--button">
          Submit
        </Button>
        <Button onClick={switchAutModeHandler} type="text">
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </Button>
      </Form>
    </div>
  );
};

export default Auth;
