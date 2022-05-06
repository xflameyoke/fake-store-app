import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = (props: {
  link: React.ReactChild | React.ReactPortal,
  linkName: React.ReactChild | React.ReactPortal,
}) => (
  <div className="nav">
    <ul>
      <li>
        <Link to={`${props.link}`}>{props.linkName}</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
