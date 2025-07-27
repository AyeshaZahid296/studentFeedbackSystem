import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoutes = ({ children, allowedRoles }) => {
    const { user } = useContext(UserContext);

    if (!user || !user.token) return <Navigate to="/login" replace />;

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default PrivateRoutes;
