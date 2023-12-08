import React from 'react';
import './AdminHomeBody.css'

function AdminHomeBody() {
  return (
    <div className="adminhome-page">
      <header className="adminhero">
        <h1>Welcome to hozTox</h1>
        <p>Discover Amazing Content</p>
      </header>
      <section className="admin-main-content">
        <h2>Featured Content</h2>
        {/* Add your main content here */}
      </section>
    </div>
  );
}

export default AdminHomeBody;
