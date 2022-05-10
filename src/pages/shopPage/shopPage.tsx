import React from 'react';
import { Nav, Products } from '../../components';
import './shopPage.scss';

const ShopPage = () => (
  <div className="shop__container">
    <div className="container__nav">
      <Nav link="/shop/jewelery" linkName="Jewelery" />
      <Nav link="/shop/men's clothing" linkName="Men's clothes" />
      <Nav link="/shop/women's clothing" linkName="Women's clothes" />
      <Nav link="/shop/electronics" linkName="Electronics" />
    </div>
    <div className="products__container">
      <Products />
    </div>
  </div>
);

export default ShopPage;
