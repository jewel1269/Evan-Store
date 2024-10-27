import React from "react";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="lg:flex justify-center lg:space-x-36 lg:p-10 bg-white">
      {/* Feature 1 */}
      <div className="text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-16 h-16 border-2 border-black p-1 rounded-full bg-gray-200 mb-4">
            <FaTruck className="text-2xl text-black" />
          </div>
        </div>
        <h3 className="font-bold text-lg">FREE AND FAST DELIVERY</h3>
        <p className="text-sm text-gray-500">
          Free delivery for all orders over $140
        </p>
      </div>

      {/* Feature 2 */}
      <div className="text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center border-2 border-black p-1 w-16 h-16 rounded-full bg-gray-200 mb-4">
            <FaHeadset className="text-2xl text-black" />
          </div>
        </div>
        <h3 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h3>
        <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
      </div>

      {/* Feature 3 */}
      <div className="text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center border-2 border-black p-1 w-16 h-16 rounded-full bg-gray-200 mb-4">
            <FaShieldAlt className="text-2xl text-black" />
          </div>
        </div>
        <h3 className="font-bold text-lg">MONEY BACK GUARANTEE</h3>
        <p className="text-sm text-gray-500">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Features;
