import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { addToCart, addWishlist } from "../../Redux/features/product";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [flashSales, setFlashSales] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //add to cart
  const AddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.productName} added successfully!`);
  };

  const handleAddWishlist = (item) => {
    dispatch(addWishlist(item));
    toast.success(`${item.productName} added to wishlist!`);
  };

  // Set the countdown end time here
  const endTime = new Date("2024-11-14T23:59:59").getTime();

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

  //fsetch data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use the correct API endpoint
        const response = await axios.get(
          `https://evan-store-server.vercel.app/product/Api/byGetProduct`
        );
        setFlashSales(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="lg:p-6 bg-white rounded-lg">
      {/* Header with Timer */}
      <div className="lg:flex md:flex lg:justify-between md:justify-between justify-center items-center mb-4">
        <h2 className="text-2xl font-semibold">
          <span className="text-red-500 mr-2">⦿</span>
          Today's Flash Sales
        </h2>
        <Toaster />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        {/* Product Card */}
        {flashSales.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg lg:p-4 relative hover:shadow-lg transition"
          >
            {/* Discount Badge */}
            <div className="absolute top-2 lg:left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {item.discount}%
            </div>

            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2 text-gray-500">
              <button
                onClick={() => handleAddWishlist(item)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <FaHeart className="h-5 w-5" />
              </button>
              <button className="p-1 rounded-full hover:bg-gray-200">
                <FaEye className="h-5 w-5" />
              </button>
            </div>

            <NavLink to={`/productDetails/${item?._id}`}>
              {/* Product Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={`https://evan-store-server.vercel.app/${item.image[0].replace(
                    /\\/g,
                    "/"
                  )}`} // Display only the first image
                  alt="Product"
                  className="w-60 h-48 rounded-lg"
                />
              </div>
            </NavLink>

            {/* Product Info */}
            <h3 className="text-sm font-semibold">{item.productName}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 font-bold text-lg">
                Tk {item.price.new}
              </span>
              <span className="text-gray-400 line-through">
                Tk {item.price.old}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 text-yellow-500 text-sm mt-1">
              {Array.from({ length: Math.floor(item.rating) }, (_, index) => (
                <span key={index}>★</span> // Full star for each whole number
              ))}
              {item.rating % 1 !== 0 && <span>☆</span>}{" "}
              {/* Optional half star if rating is a decimal */}
              <span className="text-gray-400">({item.review} reviews)</span>
            </div>

            {/* Add to Cart Button */}
            {item.instock === true ? (
              <button
                onClick={() => AddToCart(item)}
                className="w-full mt-4 bg-black text-white py-1 rounded hover:bg-gray-800"
              >
                Add To Cart
              </button>
            ) : (
              <button
                className="w-full mt-4 bg-gray-300 text-gray-600 py-1 rounded cursor-not-allowed"
                disabled
              >
                Out of Stock
              </button>
            )}
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <NavLink to={"/shop"} className="flex justify-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-red-600">
          View All Products
        </button>
      </NavLink>
    </div>
  );
};

export default FlashSale;
