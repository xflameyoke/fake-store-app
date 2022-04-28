import React from 'react';
import { Link } from 'react-router-dom';

const ShopNav = (props: {
  link: React.ReactChild | React.ReactPortal,
  linkName: React.ReactChild | React.ReactPortal,
}) => (
  <ul>
    <li>
      <Link to={`${URL}/${props.link}`}>{props.linkName}</Link>
    </li>
  </ul>
);

export default ShopNav;
