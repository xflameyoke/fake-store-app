import React from 'react';
import { Products, ShopNav } from '../../components';
import './shopPage.scss';

const ShopPage = () => (
  <div className="container">
    <div className="container__nav">
      <ShopNav link="jawelery" linkName="Jawelery" />
      <ShopNav link="clothes" linkName="Clothes" />
    </div>
    <div className="container__products">
      <Products />
    </div>
  </div>
);

export default ShopPage;
