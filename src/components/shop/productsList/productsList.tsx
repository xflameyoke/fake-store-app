import { Button } from 'antd';
import React from 'react';
import './productsList.scss';

const ProductsList = (props: {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
}) => (
  <div className="products">
    <div className="products__image">
      <img src={props.image} alt="Product image" />
    </div>
    <ul className="products__list">
      <li key={props.id}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h3>Price: {props.price}$</h3>
      </li>
    </ul>
    <Button type="default">Add to card</Button>
  </div>
);

export default ProductsList;
