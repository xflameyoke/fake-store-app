import React from 'react';
import { Nav, Products } from '../../components';
import './shopPage.scss';

const ShopPage = () => (
  <div className="container">
    <div className="container__nav">
      <Nav link="/jewelery" linkName="Jewelery" />
      <Nav link="/menclothes" linkName="Men's clothes" />
      <Nav link="/womenclothes" linkName="Women's clothes" />
      <Nav link="/electronics" linkName="Electronics" />
    </div>
    <div className="container__products">
      <Products />
    </div>
  </div>
);

export default ShopPage;
