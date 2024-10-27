import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import ReletedItem from "./ReletedItem";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("white");
  const navigate = useNavigate()

  const handleOrder = (e)=>{
    e.preventDefault()
    navigate("/bilingSystem")
  }

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <nav className="text-gray-600 text-sm mb-4">
        <span>
          <Link to="/" className="hover:text-red-500">Home</Link> / ProductDetails /{" "}
          <span className="font-semibold text-gray-800">
            Havic HV G-92 Gamepad
          </span>
        </span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Product Images */}
        <div className="flex  items-center lg:w-1/2">
          <div className="grid grid-cols-1 gap-2 mb-4">
            <img
              src="/images/gamepad1.png"
              alt="Gamepad view 1"
              className="w-24 h-24 border border-gray-200"
            />
            <img
              src="/images/gamepad2.png"
              alt="Gamepad view 2"
              className="w-24 h-24 border border-gray-200"
            />
            <img
              src="/images/gamepad3.png"
              alt="Gamepad view 3"
              className="w-24 h-24 border border-gray-200"
            />
            <img
              src="/images/gamepad4.png"
              alt="Gamepad view 4"
              className="w-24 h-24 border border-gray-200"
            />
          </div>
       <div>
       <img
            src="https://media.4rgos.it/i/Argos/0621-m0014-m007-m050-asym-m008-m022-gamingconsoleguide-8349103?w=auto&qlt=50&fmt=auto&noiser=0&fmt.jpeg.interlaced=true&fmt.jp2.qlt=40&"
            alt="Main Gamepad"
            className="w-full max-w-md"
          />
       </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Havic HV G-92 Gamepad</h2>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">★★★★☆</span>
            <span className="text-gray-500">(150 Reviews)</span>
            <span className="ml-4 text-green-600 font-medium">In Stock</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800 mb-4">$192.00</p>
          <p className="text-gray-600  mb-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>
          <hr/>

          <div className="flex gap-3 items-center mt-2 mb-4">
            <span className="block font-semibold mb-1">Colours:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedColor("white")}
                className={`w-6 h-6 rounded-full ${
                  selectedColor === "white"
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
                style={{ backgroundColor: "#ffffff" }}
              />
              <button
                onClick={() => setSelectedColor("black")}
                className={`w-6 h-6 rounded-full ${
                  selectedColor === "black"
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
                style={{ backgroundColor: "#000000" }}
              />
            </div>
          </div>

          <div className="flex items-center mt-2 gap-3 mb-4">
            <span className="block font-semibold mb-1">Size:</span>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded border ${
                    selectedSize === size
                      ? "bg-red-500 text-white"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex  items-center mb-4">
           <div className="border-2">
           <button
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-1 bg-gray-200 rounded-l"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-1 bg-gray-200 rounded-r"
            >
              +
            </button>
           </div>
            <button onClick={handleOrder} className="ml-4 bg-red-500 text-white px-6 py-2 rounded">
              Buy Now
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
            <CiDeliveryTruck />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-gray-500 text-sm">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <GiReturnArrow />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-gray-500 text-sm">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReletedItem/>
      </div>
    </div>
    
  );
}

export default ProductDetail;
