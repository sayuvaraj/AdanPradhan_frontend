import React from 'react';
import './LoadingAnimation.css'; // Import CSS file for styling

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-message">Loading...</div>
      <div className="spinning-circle">
        <div className="half-circle half-circle-left"></div>
        <div className="half-circle half-circle-middle"></div>
        <div className="half-circle half-circle-right"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
