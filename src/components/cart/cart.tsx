import React from 'react';
import { useQuery } from 'react-query';
import { Button } from 'antd';
import './cart.scss';
import { LoadingSpinner } from '../loadingSpinner';

const Cart = () => {
  const fetchCart = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  };

  const { data, status } = useQuery('cartProducts', fetchCart);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'error') {
    return <h1>Error!</h1>;
  }

  return (
    <div className="cart">
      <div className="cart__products">
        <div className="grid__left">
          <h1>Your Cart:</h1>
          <div className="cart__amount">Total Amount: 25$</div>
          <div className="cart--button">
            <Button>Order</Button>
          </div>
        </div>
        <div className="grid__right">
          <ol>
            {data.map(
              (product: { id: number, title: string, price: number }) => (
                <li>
                  <span>{product.title}</span>
                  <span>Price: {product.price}$</span>
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Cart;
