import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../../components/layout/Navbar";

const ThankYou = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-b from-blue-50 to-white px-4">
                <div className="bg-white shadow-xl rounded-xl p-10 max-w-lg w-full text-center">

                    {/* Success Icon */}
                    <div className="flex justify-center mb-4 text-green-500 text-6xl">
                        <FaCheckCircle />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        Thank You!
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-6">
                        Your feedback has been successfully submitted. <br />
                        We truly appreciate your time and input!
                    </p>

                    <Link
                        to="/feedback"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
                    >
                        Submit Another Feedback
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ThankYou;
