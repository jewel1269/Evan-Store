import React, { useState, useEffect } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();

  const handleDetails =(e)=>{
    e.preventDefault()
    navigate("/productDetails")
  }

  // Set the countdown end time here
  const endTime = new Date("2024-12-31T23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="lg:p-6 bg-white rounded-lg">
      {/* Header with Timer */}
      <div className="lg:flex md:flex lg:justify-between md:justify-between justify-center items-center mb-4">
        <h2 className="text-2xl font-semibold">
          <span className="text-red-500 mr-2">⦿</span>
          Today's Flash Sales
        </h2>
        <div className="flex space-x-2 text-lg font-semibold">
          <div className="text-center">
            <span className="block text-2xl text-gray-800">
              {timeLeft.days}
            </span>
            <span className="text-sm text-gray-500">Days</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span className="block text-2xl text-gray-800">
              {timeLeft.hours}
            </span>
            <span className="text-sm text-gray-500">Hours</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span className="block text-2xl text-gray-800">
              {timeLeft.minutes}
            </span>
            <span className="text-sm text-gray-500">Minutes</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span className="block text-2xl text-gray-800">
              {timeLeft.seconds}
            </span>
            <span className="text-sm text-gray-500">Seconds</span>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Product Card */}
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="border rounded-lg lg:p-4 relative hover:shadow-lg transition"
          >
            {/* Discount Badge */}
            <div className="absolute top-2 lg:left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{index * 5 + 20}%
            </div>

            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2 text-gray-500">
              <button className="p-1 rounded-full hover:bg-gray-200">
                <FaHeart className="h-5 w-5" />
              </button>
              <button onClick={handleDetails} className="p-1 rounded-full hover:bg-gray-200">
                <FaEye className="h-5 w-5" />
              </button>
            </div>

            {/* Product Image */}
            <div>
              <img
                src="https://media.4rgos.it/i/Argos/0621-m0014-m007-m050-asym-m008-m022-gamingconsoleguide-8349103?w=auto&qlt=50&fmt=auto&noiser=0&fmt.jpeg.interlaced=true&fmt.jp2.qlt=40&"
                alt="Product"
                className="w-full h-48  rounded-lg mb-4"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-sm font-semibold">Product Name</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 font-bold text-lg">$120</span>
              <span className="text-gray-400 line-through">$160</span>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 text-yellow-500 text-sm mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-400">(88)</span>
            </div>

            {/* Add to Cart Button */}
            {index % 2 === 0 && (
              <button className="w-full mt-4 bg-black text-white py-1 rounded hover:bg-gray-800">
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
