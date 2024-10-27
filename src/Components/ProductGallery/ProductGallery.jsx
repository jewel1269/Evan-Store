import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaEye, FaHeart } from "react-icons/fa";

const ProductGallery = () => {
  const [selectedColors, setSelectedColors] = useState({});

  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 3,
      reviews: 35,
      imgSrc:
        "https://shutterstock.com/image-photo/dry-dog-food-bowl-closeup-600nw-1897102891.jpg",
      isNew: false,
      colors: ["bg-yellow-500", "bg-black"],
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4,
      reviews: 95,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKCf_NcpS9Mpr-9HXMzA3dBNkTPiUNqB6QA&s",
      isNew: false,
      colors: [],
      hasAddToCart: true,
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 4,
      reviews: 325,
      imgSrc: "path_to_laptop_image",
      isNew: false,
      colors: ["bg-yellow-500", "bg-black"],
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: "$500",
      rating: 4,
      reviews: 145,
      imgSrc: "path_to_product_set_image",
      isNew: false,
      colors: [],
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      rating: 4,
      reviews: 65,
      imgSrc: "https://allthingsforkids.com.au/cdn/shop/products/range-rover-kids-ride-on-car-in-white-pink-and-black-894_700x700.jpg?v=1674037354",
      isNew: true,
      colors: ["bg-red-500", "bg-gray-500"],
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 4,
      reviews: 35,
      imgSrc: "path_to_soccer_cleats_image",
      isNew: false,
      colors: ["bg-yellow-500", "bg-black"],
    },
  ];

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  return (
    <div className="lg:px-8 py-16">
      <h2 className="text-red-500 font-semibold mb-2"><span className="inline-block w-2 h-6 bg-red-500 mr-2"></span> Our Products</h2>
      <h1 className="text-3xl font-bold mb-8">Explore Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white hover:shadow-lg shadow-sm border rounded-lg p-4 relative group"
          >
            {product.isNew && (
              <span className="absolute top-2 left-2 z-[1] bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>
            )}

            <div className="relative ">
              <div className="flex justify-center items-center">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-68 h-60 object-cover rounded"
              /></div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2 text-gray-500">
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaHeart className="h-5 w-5" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaEye className="h-5 w-5" />
                </button>
              </div>
            </div>

            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="text-red-500 font-bold">{product.price}</p>

            <div className="flex items-center mt-2">
              <span className="text-yellow-400">
                {"⭐".repeat(product.rating)}
              </span>
              <span className="text-gray-400 ml-2">({product.reviews})</span>
            </div>

            {product.colors.length > 0 && (
              <div className="flex items-center mt-4 space-x-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer ${color} ${
                      selectedColors[product.id] === color
                        ? "ring-2 ring-offset-2 ring-gray-800"
                        : ""
                    }`}
                    onClick={() => handleColorSelect(product.id, color)}
                  ></span>
                ))}
              </div>
            )}

            {product.hasAddToCart && (
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
