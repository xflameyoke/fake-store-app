import React from 'react';
import { CartIcon } from '../cartIcon';
import './headerCartButton.scss';

const HeaderCartButton = () => (
  <button className="button">
    <span className="button--icon">
      <CartIcon />
    </span>
    <span className="button--badge">3</span>
  </button>
);

export default HeaderCartButton;
