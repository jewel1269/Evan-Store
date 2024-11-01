import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom"; 

const ThankYou = () => {
    const navigate = useNavigate(); 

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-6xl mb-4" />
                <h1 className="text-2xl font-semibold text-gray-800">Thank You for Your Order!</h1>
                <p className="text-gray-600 mt-2">Your order has been successfully placed.</p>
                <p className="text-gray-600 mt-2">We appreciate your business and will send you a confirmation email shortly.</p>
                <NavLink to="/">
                    <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Go to Home
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ThankYou;
