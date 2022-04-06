import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Nav = () => (
  <div className="nav">
    <ul>
      <li>
        <Link to="./">Home</Link>
      </li>
      <li>
        <Link to="./shop">Shop</Link>
      </li>

      <li>
        <Link to="./contact">Contact</Link>
      </li>

      <li>
        <Link to="./login">Login</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
