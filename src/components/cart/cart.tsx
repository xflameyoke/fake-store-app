import { Button } from 'antd';
import React from 'react';
import './cart.scss';

const Cart = () => (
  <div className="cart">
    <div className="cart__products">
      <h1>Your Cart:</h1>
      <div>List</div>
    </div>
    <div className="cart__amount">Total Amount: 25$</div>
    <div className="cart--button">
      <Button>Order</Button>
    </div>
  </div>
);

export default Cart;
