import React, { useState } from 'react';
import './AdminHome.css';
import SideBar from '../../../components/adminComponents/sideBar/SideBar';
import AdminHomeBody from '../../../components/adminComponents/adminHomeBody/AdminHomeBody';
import UserList from '../../../components/adminComponents/userList/UserList';
import EventCreation from '../../../components/adminComponents/eventCreation/EventCreation';

function Home() {
  const [selector,SetSelector] = useState('home')
  const handleSelector = (val)=>{
    SetSelector(val)
  }
  console.log(selector);
  return (
    <>
    <SideBar selectorOf={handleSelector}/>
    <div className="admin-app-container">
    {selector==='home'&&<AdminHomeBody />}
    {selector==='users'&&<UserList/>}
    {selector==='events'&&<EventCreation/>}

    
    </div>
    </>

  );
}

export default Home;
