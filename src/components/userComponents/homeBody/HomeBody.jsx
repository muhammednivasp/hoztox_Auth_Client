import React from 'react';
import './HomeBody.css';

function HomeBody() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to Your Website</h1>
        <p>Discover Amazing Content</p>
      </header>
      <section className="main-content">
        <h2>Featured Content</h2>
        {/* Add your main content here */}
      </section>
    </div>
  );
}

export default HomeBody;
