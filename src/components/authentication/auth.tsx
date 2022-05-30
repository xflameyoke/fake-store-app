/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './auth.scss';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';

const validateMessages = {
  required: '${label} is required',
  types: {
    email: '${label} is not a valid email!',
    password: '${label} is not a valid password',
  },
};

const Auth = (props: { onLogin: React.MouseEventHandler<HTMLElement> }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const switchAutModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailSetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const passwordSetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onFinish = () => {
      // eslint-disable-next-line no-empty
    if (isLogin) {
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlA5nVIWyzfqUKZhv8EqOiIqaMhHgqOJg',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  };

  

  return (
    <div className="auth">
      <h1>{isLogin ? 'Login' : 'Sign up'}</h1>
      <Form
        className="auth__form"
        name="auth"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input value={email} onChange={emailSetHandler} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, min: 6, max: 12 }]}
        >
          <Input value={password} onChange={passwordSetHandler} />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="form__button"
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
