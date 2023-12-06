import React from 'react'
import NavBar from '../navbar/NavBar.jsx'
import Footer from '../footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            {/* <div className='z-100'> */}
            < NavBar />
            {/* </div> */}
            <div>{<Outlet />}</div>
            <Footer />
        </>
    )
}

export default Layout