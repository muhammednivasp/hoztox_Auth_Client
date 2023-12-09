import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

import { userGet } from '../../../services/UserApi';

function NavBar() {
  const Navigate = useNavigate()
  const [user, setUser] = useState('')
  useEffect(() => {
    userGet().then((data) => {
      setUser(data?.data?.username)
    }).catch((err) => console.log(err))
  }, [])

  const handeLogout = () => {
    localStorage.removeItem('user')
    Navigate('/')
  }

  const handleHome = () => {
    Navigate('/')
  }
  return (
    <nav className="navbar">
      <div className="logo">hozTox</div>
      <ul className="nav-links">
        <li onClick={handleHome}>Home</li>
        <li className='usershow'>{user}</li>
        <li className='logout' onClick={() => handeLogout()}>LogOut</li>
      </ul>
    </nav>
  );
}

export default NavBar;
