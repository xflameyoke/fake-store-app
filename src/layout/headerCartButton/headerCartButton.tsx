import React from 'react';
import { CartIcon } from '../cartIcon';
import './headerCartButton.scss';

const HeaderCartButton = () => (
  <button className="button">
    <span className="button__icon">
      <CartIcon />
    </span>
    <span>3</span>
  </button>
);

export default HeaderCartButton;
