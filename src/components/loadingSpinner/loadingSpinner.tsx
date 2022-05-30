import React from 'react';
import './loadingSpinner.scss';

const LoadingSpinner = () => (
  <div className="spinner">
    <div className="spinner--animation">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoadingSpinner;
