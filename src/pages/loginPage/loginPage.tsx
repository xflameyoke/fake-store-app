import React from 'react';
import { Field, Form, Formik } from 'formik';
import './loginPage.scss';
import { Button } from 'antd';
import 'antd/dist/antd.css';

interface formValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const initialValues: formValues = { email: '', password: '' };
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        <Form className="form__label">
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" />
          <Button type="primary" className="form--button">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
