import React, { useContext } from 'react';
import { CartIcon } from '../cartIcon';
import './headerCartButton.scss';
import Context from '../../store/context';

const HeaderCartButton = () => {
  const context = useContext(Context);

  const cartNumber = context.totalAmount;

  return (
    <button className="button">
      <span className="button__icon">
        <CartIcon />
      </span>
      <span>{cartNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
