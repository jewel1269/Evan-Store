import React from "react";
import Marquee from "react-fast-marquee";
import { FaHeart, FaEye } from "react-icons/fa";

const BestSellingProducts = () => {
  const products = [
    {
      name: "The north coat",
      price: "$260",
      originalPrice: "$360",
      image:
        "https://media.istockphoto.com/id/918392268/photo/blue-tartan-shirt-folded-on-white-background.jpg?s=612x612&w=is&k=20&c=-dB1lg98AxgSmYGDUZc7NpuPMJ9B13fUTOrOU7naXSA=",
      rating: 4.5,
      reviews: 65,
    },
    {
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      image: "https://example.com/gucci-bag.jpg",
      rating: 5,
      reviews: 65,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      image: "https://example.com/cpu-cooler.jpg",
      rating: 4.5,
      reviews: 65,
    },
    {
      name: "Small BookShelf",
      price: "$360",
      originalPrice: "",
      image: "https://example.com/bookshelf.jpg",
      rating: 5,
      reviews: 65,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      image: "https://example.com/cpu-cooler.jpg",
      rating: 4.5,
      reviews: 65,
    },
    {
      name: "Small BookShelf",
      price: "$360",
      originalPrice: "",
      image: "https://example.com/bookshelf.jpg",
      rating: 5,
      reviews: 65,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      image: "https://example.com/cpu-cooler.jpg",
      rating: 4.5,
      reviews: 65,
    },
    {
      name: "Small BookShelf",
      price: "$360",
      originalPrice: "",
      image: "https://example.com/bookshelf.jpg",
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg lg:mt-0 md:mt-8">
      {/* Section Header */}
      <div className="flex items-center mb-4">
        <span className="text-red-500 text-xl font-semibold mr-2">⦿</span>
        <span className="text-red-500 text-xl font-semibold">This Month</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600">
          View All
        </button>
      </div>

      {/* Marquee Slider */}
      <Marquee pauseOnHover={true} gradient={false} speed={40}>
        <div className="flex space-x-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-200 relative hover:shadow-lg transition min-w-[200px]"
            >
              {/* Action Buttons */}
              <div className="absolute top-2 right-2 flex flex-col space-y-2 text-gray-500">
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaHeart className="h-5 w-5" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaEye className="h-5 w-5" />
                </button>
              </div>

              {/* Product Image */}
              <div className="flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-56 h-60 object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-lg">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 text-yellow-500 text-sm mt-1">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {product.rating % 1 !== 0 && <span>☆</span>}
                <span className="text-gray-400">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BestSellingProducts;
