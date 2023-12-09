import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isUserAuth } from "../../services/UserApi.js";
import { isAdminAuth } from "../../services/AdminApi.js";
import toast from "react-hot-toast";

export default function PrivateRoutes({ role, route }) {
    const [verify, setVerify] = useState(null);
    useEffect(() => {
        if (role === "user") {
            isUserAuth()
                .then((res) => {
                    setVerify(res?.data?.success);
                })
                .catch((err) => {
                    setVerify(false);
                    localStorage.removeItem("user");
                    toast.error(err?.response?.data?.message || 'Authentication Failed');
                });
        }
        else if (role === "admin") {
            isAdminAuth()
                .then((res) => {
                    setVerify(res?.data?.success);
                })
                .catch((err) => {
                    setVerify(false);
                    localStorage.removeItem("admin");
                    toast.error(err?.response?.data?.message || 'Authentication Failed');
                });
        }

    }, [role]);
    if (!(localStorage.getItem(role))) {
        toast.error('Please Login');
        return <Navigate to={route} />;
    }

    if (verify == null) return;
    return verify ? <Outlet /> : <Navigate to={route} />;


}
