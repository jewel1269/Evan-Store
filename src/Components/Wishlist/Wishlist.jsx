import React from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const items = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      imageUrl: "path-to-duffle-bag-image",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: "$1960",
      imageUrl: "path-to-cpu-cooler-image",
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: "$550",
      imageUrl: "path-to-gamepad-image",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: "$750",
      imageUrl: "path-to-jacket-image",
    },
  ];

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Wishlist ({items.length})</h2>
        <button className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
          Move All To Bag
        </button>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 bg-white relative"
          >
            {/* Discount Badge */}
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                {item.discount}
              </span>
            )}

            {/* Delete Icon */}
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <FaTrash />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
