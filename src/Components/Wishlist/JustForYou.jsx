import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const JustForYou = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://evan-store-server.vercel.app/product/Api/byGetProduct`
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="lg:p-10 md:p-6 p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
          <span className="inline-block w-2 h-6 bg-red-500 mr-2 rounded-sm"></span>
          Just For You
        </h2>
       <NavLink to={"/shop"}>
       <button className="border border-gray-400 px-4 py-1 rounded-md text-gray-700 hover:bg-gray-200 transition">
          See All
        </button>
       </NavLink>
      </div>

      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        <div className="flex gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border rounded-lg p-4 w-64 relative shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Discount Tag */}
              {item.discount && (
                <span className="absolute z-[1] top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                  {item.discount}%
                </span>
              )}

              {/* Product Image with View Icon */}
              <NavLink to={`/productDetails/${item._id}`}>
                <div className="relative flex justify-center mb-4 overflow-hidden rounded-lg">
                  <img
                    src={`https://evan-store-server.vercel.app/${item.image[0].replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt="Product"
                    className="w-60 h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <FaEye className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" />
                </div>
              </NavLink>

              {/* Add to Cart Button */}
              <button className="flex items-center justify-center w-full py-2 bg-black text-white rounded-md mb-4 hover:bg-gray-800 transition">
                <FaShoppingCart className="mr-2" /> Add To Cart
              </button>

              {/* Product Info */}
              <h3 className="text-lg font-semibold text-gray-800">
                {item.productName}
              </h3>
              <div className="text-red-500 text-lg font-bold">
                ${item.price.new}
              </div>
              {item.price.old && (
                <div className="text-gray-500 line-through text-sm">
                  ${item.price.old}
                </div>
              )}

              {/* Rating */}
              <div className="flex items-center text-yellow-500 mt-2">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`${
                      i < item.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-1 text-gray-600">({item.rating})</span>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default JustForYou;
