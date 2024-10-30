import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaEye, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";

const ProductGallery = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/Api/GetProducts?NewArrival=true`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  return (
    <div className="lg:px-8 py-16">
      <h2 className="text-red-500 font-semibold mb-2">
        <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span> Our Products
      </h2>
      <h1 className="text-3xl font-bold mb-8">Explore New Arrival Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.slice(0, 20).map((product) => (
          <div
            key={product._id}
            className="bg-white hover:shadow-lg shadow-sm border rounded-lg p-4 relative group"
          >
            {product.isNew && (
              <span className="absolute top-2 left-2 z-[1] bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>
            )}

            <div className="relative">
              <div className="flex justify-center items-center">
                <NavLink to={`/productDetails/${product._id}`}>
                  <div className="flex justify-center mb-4">
                    <img
                      src={`http://localhost:5000/${product.image[0].replace(
                        /\\/g,
                        "/"
                      )}`} // Display only the first image
                      alt="Product"
                      className="w-60 h-48 rounded-lg"
                    />
                  </div>
                </NavLink>
              </div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2 text-gray-500">
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaHeart className="h-5 w-5" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaEye className="h-5 w-5" />
                </button>
              </div>
            </div>

            <h2 className="mt-4 text-lg font-semibold">{product.productName}</h2>
            <p className="text-red-500 font-bold">${product.price.new}</p>

            <div className="flex items-center mt-2">
              <span className="text-yellow-400">
                {"⭐".repeat(product.rating)}
              </span>
              <span className="text-gray-400 ml-2">({product.review} review)</span>
            </div>

            {product.colors.length > 0 && (
              <div className="flex items-center mt-4 space-x-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer ${color} ${
                      selectedColors[product._id] === color
                        ? "ring-2 ring-offset-2 ring-gray-800"
                        : ""
                    }`}
                    onClick={() => handleColorSelect(product._id, color)}
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

      <NavLink to={"/shop"} className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
          View All Products
        </button>
      </NavLink>
    </div>
  );
};

export default ProductGallery;
