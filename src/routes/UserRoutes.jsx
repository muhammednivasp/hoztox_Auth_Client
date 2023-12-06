import { Route, Routes } from 'react-router-dom'

import NotFound from '../pages/notFoundPage/NotFound.jsx'
import Login from '../pages/user/userLogin/UserLogin.jsx'
import Register from '../pages/user/userRegistration/UserRegistration.jsx'
import Home from '../pages/user/home/Home.jsx'
import PrivateRoutes from './routeMiddlewares/Protected.js'
import PublicRoutes from './routeMiddlewares/PublicRoute.js'
import Layout from '../components/userComponents/layout/Layout.jsx'

export default function UserRoutes() {
    return (
        <Routes>

            <Route path='*' element={<NotFound />} />

            <Route element={<PublicRoutes role={"user"} route={"/home"} />}>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>

            <Route element={<PrivateRoutes role={"user"} route={"/"} />}>
                <Route path="/home" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Route>
            {/* <Route path='/Home' element={<Home/>} /> */}

        </Routes>

    )
}