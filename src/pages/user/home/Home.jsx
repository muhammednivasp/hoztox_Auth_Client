import React from 'react';
import './Home.css';
import NavBar from '../../../components/userComponents/navbar/NavBar.jsx';
import HomeBody from '../../../components/userComponents/homeBody/HomeBody.jsx';
import Footer from '../../../components/userComponents/footer/Footer.jsx';

function Home() {
  return (
    <div className="app-container">
      {/* <NavBar /> */}
      {/* <div className="content-container"> */}
        <HomeBody />
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;