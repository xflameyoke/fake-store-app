import React from 'react';
import { Nav, Products } from '../../components';
import './shopPage.scss';

const ShopPage = () => (
  <div className="container">
    <div className="container__nav">
      <Nav link="jawelery" linkName="Jawelery" />
      <Nav link="clothes" linkName="Clothes" />
    </div>
    <div className="container__products">
      <Products />
    </div>
  </div>
);

export default ShopPage;
