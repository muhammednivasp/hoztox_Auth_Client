import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isUserAuth } from "../../services/UserApi.js";
import { isAdminAuth } from "../../services/AdminApi.js";
import toast from "react-hot-toast";

export default function PublicRoutes({ role, route }) {
    const [verify, setVerify] = useState(null);

    useEffect(() => {
    if (localStorage.getItem(role)) {
        if (role === "user") {
            isUserAuth()
                .then((res) => {
                    setVerify(res.data.success);
                    console.log(res.data.success);
                })
                .catch((err) => {
                    setVerify(false);
                    localStorage.removeItem("user");
                    toast.error(err.response.data.message);
                    console.log(err);
                });
        }
        else if (role === "admin") {
            isAdminAuth()
                .then((res) => {
                    setVerify(res.data.success);
                })
                .catch((err) => {
                    setVerify(false);
                    localStorage.removeItem("admin");
                    console.log(err);
                });
        }
    }else{
        setVerify(false)
    }
    }, []);

    if (verify == null) return;
    return verify ? <Navigate to={route}/> : <Outlet />;
}
