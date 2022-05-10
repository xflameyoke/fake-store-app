import React from 'react';
import './homePage.scss';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const HomePage = () => (
  <div className="wrapper">
    <div className="container">
      <p className="container__header">Welcome to Fake-Store</p>
      <p className="container__paragraph">Feel free to browse our shop</p>
      <Button>
        <Link to="./login">Login or Sign up</Link>
      </Button>
    </div>
  </div>
);

export default HomePage;
