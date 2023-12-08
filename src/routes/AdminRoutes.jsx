import { Route, Routes } from 'react-router-dom'

import NotFound from '../pages/notFoundPage/NotFound.jsx'
import AdminLogin from '../pages/admin/adminLogin/AdminLogin.jsx'
import AdminHome from '../pages/admin/adminHome/AdminHome.jsx'
import PrivateRoutes from './routeMiddlewares/Protected.js'
import PublicRoutes from './routeMiddlewares/PublicRoute.js'

function AdminRoutes() {

    return (
        <Routes>

            <Route path='*' element={<NotFound />} />

            <Route element={<PublicRoutes role={"admin"} route={"/admin/home"} />}>
                <Route path='/' element={<AdminLogin />} />
            </Route>

            <Route element={<PrivateRoutes role={"admin"} route={"/admin"} />}>
                <Route path="/home" element={<AdminHome />} />
            </Route>

        </Routes>

    )
}
export default AdminRoutes
