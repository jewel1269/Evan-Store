import React from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const ReletedItem = () => {
  const items = [
    {
      id: 1,
      name: "ASUS FHD Gaming Laptop",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      rating: 4.5,
      reviews: 65,
      imageUrl: "path-to-laptop-image",
    },
    {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      price: "$1160",
      rating: 4.8,
      reviews: 65,
      imageUrl: "path-to-monitor-image",
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      price: "$560",
      tag: "NEW",
      rating: 4.3,
      reviews: 65,
      imageUrl: "path-to-gamepad-image",
    },
    {
      id: 4,
      name: "AK-900 Wired Keyboard",
      price: "$200",
      rating: 4.7,
      reviews: 65,
      imageUrl: "path-to-keyboard-image",
    },
  ];

  return (
    <div className="  max-w-8xl md:p-6 p-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span> Releted Item
        </h2>
        <button className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
          See All
        </button>
      </div>

     <Marquee  pauseOnHover={true} gradient={false} speed={40}>
     <div className="grid grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 bg-white relative"
          >
            {/* Discount or New Tag */}
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                {item.discount}
              </span>
            )}
            {item.tag && (
              <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs">
                {item.tag}
              </span>
            )}

            {/* View Icon */}
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <FaEye />
            </button>

            {/* Product Image */}
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-40 object-cover mb-4"
            />

            {/* Add to Cart Button */}
            <button className="flex items-center justify-center w-full py-2 bg-black text-white rounded-md mb-4">
              <FaShoppingCart className="mr-2" /> Add To Cart
            </button>

            {/* Product Info */}
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="text-red-500 text-xl font-bold">{item.price}</div>
            {item.originalPrice && (
              <div className="text-gray-500 line-through text-sm">
                {item.originalPrice}
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center text-yellow-500 mt-2">
              <AiFillStar />{" "}
              <span className="ml-1 text-gray-600">{item.rating}</span>
              <span className="ml-2 text-gray-400">({item.reviews})</span>
            </div>
          </div>
        ))}
      </div>
     </Marquee>
    </div>
  );
};

export default ReletedItem;
