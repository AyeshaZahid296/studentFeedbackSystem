import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import SideMenu from './SideMenu';
import Navbar from './Navbar';

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <Navbar activeMenu={activeMenu} />

            {!user ? (
                <div className="flex justify-center items-center h-screen text-gray-500">Loading...</div>
            ) : (
                <div className="flex">
                    {/* Sidebar */}
                    <div className="hidden xl:block">
                        <SideMenu activeMenu={activeMenu} />
                    </div>

                    {/* Main Content */}
                    <div className="grow mx-5 mt-4">{children}</div>
                </div>
            )}
        </div>
    );
};

export default DashboardLayout;
