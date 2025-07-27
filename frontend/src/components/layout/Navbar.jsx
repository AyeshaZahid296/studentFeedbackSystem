import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Pages where we don't want to show the Login button
    const hideLoginBtnRoutes = ['/dashboard', '/thank-you'];

    // Show Logout only on Dashboard
    const isDashboard = location.pathname === '/dashboard';

    const handleLogout = () => {
        // Clear user from localStorage or context (if any)
        localStorage.removeItem('user'); // Optional
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-30 w-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                {/* Logo / Title */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Student Feedback System
                </h2>

                {/* Login / Logout Button */}
                {isDashboard ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                    >
                        Logout
                    </button>
                ) : !hideLoginBtnRoutes.includes(location.pathname) ? (
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                    >
                        Login
                    </button>
                ) : (
                    <div className="w-[72px]" /> // spacing placeholder
                )}
            </div>
        </header>
    );
};

export default Navbar;
