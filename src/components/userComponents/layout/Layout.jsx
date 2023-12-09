import React from 'react'
import NavBar from '../navbar/NavBar.jsx'
import Footer from '../footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            < NavBar />
            <div>{<Outlet />}</div>
            <Footer />
        </>
    )
}

export default Layout