import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col justify-center items-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to the Feedback System</h1>
            <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">
                We value your feedback. If you're a student, feel free to submit your feedback.
                If you're an admin, please login to manage responses.
            </p>

            <div className="flex gap-6 flex-wrap justify-center">
                <button
                    onClick={() => navigate('/feedback')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition-all"
                >
                    Give Feedback
                </button>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-gray-100 hover:bg-gray-200 text-blue-800 px-6 py-3 rounded-md shadow transition-all"
                >
                    Admin Login
                </button>
            </div>
        </div>
    );
};

export default Welcome;
