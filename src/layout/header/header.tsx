import React from 'react';
import './header.scss';
import { Nav } from '../../components';
import HeaderCartButton from '../headerCartButton/headerCartButton';

const Header = (props: {
  onLogout: React.MouseEventHandler<HTMLButtonElement>,
}) => (
  <div className="header">
    <Nav link="/" linkName="Home" />
    <Nav link="/shop" linkName="Shop" />
    <Nav link="/contact" linkName="Contact" />
    <button className="logout--button" onClick={props.onLogout}>
      Logout
    </button>
    <HeaderCartButton />
  </div>
);

export default Header;
