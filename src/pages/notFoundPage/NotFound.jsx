import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='full'>
      <div className="container">
        <div className="error-code">404</div>
        <div className="error-message">Oops! Page not found.</div>
        <a href="/home" className="home-link">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
