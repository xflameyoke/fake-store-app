import React from 'react';
import './header.scss';
import { Nav } from '../../components';
import HeaderCartButton from '../headerCartButton/headerCartButton';

const Header = () => (
  <div className="header">
    <Nav link="/" linkName="Home" />
    <Nav link="/shop" linkName="Shop" />
    <Nav link="/contact" linkName="Contact" />
    <HeaderCartButton />
  </div>
);

export default Header;
