import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    // 🧠 Check user from localStorage on refresh
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser && !user) {
            setUser(JSON.parse(storedUser));
        }
    }, [user, setUser]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Feedback System</h1>

            <div>
                {/* Show logout only if user is logged in and on admin dashboard */}
                {user?.role === 'admin' && location.pathname === '/admin/dashboard' ? (
                    // <button

                    //     onClick={handleLogout}
                    //     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    // >
                    //     Logout
                    // </button>
                    <Link
                        to="/"
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                        Login
                    </Link>
                ) : (
                    <Link
                        to="/login"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
