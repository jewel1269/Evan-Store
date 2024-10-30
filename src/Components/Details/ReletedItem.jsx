import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const RelatedItem = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/byCategoryClient?category=${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-8xl md:p-6 p-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span> Related Item
        </h2>
       <NavLink to={"/shop"}>
       <button className="border border-gray-400 px-4 py-1 hover:bg-green-600 hover:text-white red-600 rounded-md text-gray-700">
          See All
        </button>
       </NavLink>
      </div>

      <Marquee pauseOnHover={true} gradient={false} speed={40}>
        <div className="grid grid-cols-10 gap-6">
          {products.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 bg-white relative">
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                  {item.discount}
                </span>
              )}
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                <FaEye />
              </button>

              <NavLink to={`/productDetails/${item._id}`}>
                <div className="flex justify-center mb-4">
                  <img
                    src={`http://localhost:5000/${item.image[0].replace(/\\/g, "/")}`}
                    alt="Product"
                    className="w-60 h-48 rounded-lg"
                  />
                </div>
              </NavLink>

              <h3 className="text-lg font-semibold">{item.productName}</h3>
              <div className="text-red-500 text-xl font-bold">{item.price.new}</div>
              {item.price.old && (
                <div className="text-gray-500 line-through text-sm">
                  {item.price.old}
                </div>
              )}

              <div className="flex items-center text-yellow-500 mt-2">
                <AiFillStar />
                <span className="ml-1 text-gray-600">{item.rating}</span>
                <span className="ml-2 text-gray-400">({item.review})</span>
              </div>
              <button className="flex items-center justify-center hover:bg-green-600 hover:text-white w-full py-1 bg-black text-white rounded-md mb-4">
                <FaShoppingCart className="mr-2" /> Add To Cart
              </button>

            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default RelatedItem;
