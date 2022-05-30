import React from 'react';
import './footer.scss';

const Footer = () => {
  const actuallYear = new Date().getFullYear();
  return (
    <div className="footer">
      Mateusz Łuczak {actuallYear} @ All rights reserved
    </div>
  );
};
export default Footer;
