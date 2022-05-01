import React from 'react';
import { Products } from '../../components';
import './homePage.scss';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const HomePage = () => (
  <div className="wrapper">
    <div className="container">
      <p className="container__header">Welcome to Fake-Store</p>
      <p className="container__paragraph">Feel free to browse our shop</p>
      <div className="container_buttonGroup">
        <Button>
          <Link to="./login">Login or Sign up</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default HomePage;
