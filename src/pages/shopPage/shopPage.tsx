import React from 'react';
import { Nav, Products } from '../../components';
import './shopPage.scss';

const ShopPage = () => (
  <>
    <div className="nav__container">
      <Nav link="/shop/jewelery" linkName="Jewelery" />
      <Nav link="/shop/men's clothing" linkName="Men's clothing" />
      <Nav link="/shop/women's clothing" linkName="Women's clothing" />
      <Nav link="/shop/electronics" linkName="Electronics" />
    </div>

    <div className="products__container">
      <Products />
    </div>
  </>
);

export default ShopPage;
