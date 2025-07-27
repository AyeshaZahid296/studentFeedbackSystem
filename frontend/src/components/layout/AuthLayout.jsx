import React from 'react';
import uiImg from '../../assets/task_priority_preview.jpg';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Left: Form Section */}
            <div className="w-full md:w-3/5 px-6 sm:px-10 lg:px-16 py-10 flex flex-col justify-center bg-white shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide">
                    Student Feedback System
                </h2>
                <div className="w-full max-w-md">{children}</div>
            </div>

            {/* Right: Image Section */}
            <div className="hidden md:flex w-2/5 h-screen border-l border-gray-200 bg-white">
                <img
                    src={uiImg}
                    alt="auth-illustration"
                    className="w-full h-full object-contain p-6"
                />
            </div>
        </div>
    );
};

export default AuthLayout;
