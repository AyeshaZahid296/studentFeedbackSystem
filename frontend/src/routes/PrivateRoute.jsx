import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const PrivateRoutes = ({ allowedRoles }) => {
    const { user, loading } = useContext(UserContext);

    if (loading) return <p>Loading...</p>;

    if (!user || !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoutes;
