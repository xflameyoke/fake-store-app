import React from 'react';
import './productsList.scss';

const ProductsList = (props: {
  id: number,
  title: string,
  description: string,
  price: number,
}) => (
  <div>
    <ul className="products">
      <li key={props.id}>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <h3>Price: {props.price}$</h3>
      </li>
    </ul>
  </div>
);

export default ProductsList;
