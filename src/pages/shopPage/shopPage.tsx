import React from 'react';
import { Nav, Products } from '../../components';
import './shopPage.scss';

const ShopPage = () => (
  <div className="shop">
    <div className="shop__nav">
      <Nav link="/shop/jewelery" linkName="Jewelery" />
      <Nav link="/shop/men's clothing" linkName="Men's clothing" />
      <Nav link="/shop/women's clothing" linkName="Women's clothing" />
      <Nav link="/shop/electronics" linkName="Electronics" />
    </div>

    <div className="shop__products">
      <Products />
    </div>
  </div>
);

export default ShopPage;
