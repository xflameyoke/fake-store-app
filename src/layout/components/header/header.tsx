import React from 'react';
import './header.scss';
import { Nav } from '../../../components';

const Header = () => (
  <div className="header">
    <Nav link="/" linkName="Home" />
    <Nav link="/shop" linkName="Shop" />
    <Nav link="/contact" linkName="Contact" />
  </div>
);

export default Header;
