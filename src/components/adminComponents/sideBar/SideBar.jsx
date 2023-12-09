import React, { useState } from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

function SideBar({ selectorOf }) {

  const [selectedItem, SetSelectedItem] = useState('home')
  const Navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('admin')
    Navigate('/admin')
  }

  const handleSelect = (val) => {
    selectorOf(val)
    SetSelectedItem(val)
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>hozTox</h2>
      </div>
      <hr style={{ border: '1px solid #ccc', marginTop: '5px' }} />
      <ul className="sidebar-links">
        <li className={selectedItem === 'home' ? 'selected' : ''} onClick={() => handleSelect('home')}>Home</li>
        <li className={selectedItem === 'users' ? 'selected' : ''} onClick={() => handleSelect('users')}>Users</li>
        <li className={selectedItem === 'events' ? 'selected' : ''} onClick={() => handleSelect('events')}>Create Events</li>
      </ul>
      <hr style={{ border: '1px solid #ccc', marginTop: '5px' }} />
      <div className="sidebar-logout">
        <h4 onClick={handleLogout}>Logout</h4>
      </div>
      <hr style={{ border: '1px solid #ccc', marginTop: '5px' }} />
    </aside>
  );
}

export default SideBar;
