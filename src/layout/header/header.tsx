import React from 'react';
import './header.scss';
import { Nav } from '../../components';
import HeaderCartButton from '../headerCartButton/headerCartButton';

const Header = (props: {
  onLogout: React.MouseEventHandler<HTMLButtonElement>,
}) => (
  <div className="header">
    <div className="header__left">
      <Nav link="/" linkName="Home" />
      <Nav link="/shop" linkName="Shop" />
      <Nav link="/contact" linkName="Contact" />
    </div>
    <div className="header__right">
      <button className="header logout__button" onClick={props.onLogout}>
        Logout
      </button>
      <HeaderCartButton />
    </div>
  </div>
);

export default Header;
