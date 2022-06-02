import React, { useContext } from 'react';
import './header.scss';
import { Nav } from '../../components';
import HeaderCartButton from '../headerCartButton/headerCartButton';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate('./');
  };

  return (
    <div className="header">
      <div className="header__left">
        <Nav link="/" linkName="Home" />
        <Nav link="/shop" linkName="Shop" />
        <Nav link="/contact" linkName="Contact" />
      </div>
      <div className="header__right">
        <button className="header logout__button" onClick={logoutHandler}>
          Logout
        </button>
        <HeaderCartButton />
      </div>
    </div>
  );
};

export default Header;
