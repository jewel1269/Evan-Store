import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaHeart, FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink
import { addWishlist } from "../../Redux/features/product";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/Api/GetProduct?bestSale=true`
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

  const handleAddWishlist = (product) => {
    dispatch(addWishlist(product));
    toast.success(`${product.productName} added to wishlist!`); 
  };


  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="p-6 bg-white rounded-lg lg:mt-0 md:mt-8">
      {/* Section Header */}
      <div className="flex items-center mb-4">
        <span className="text-red-500 text-xl font-semibold mr-2">⦿</span>
        <span className="text-red-500 text-xl font-semibold">This Month</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <NavLink to={"/shop"}>
        <button className="bg-red-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-red-600">
          View All
        </button>
        </NavLink>
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
                <button onClick={()=>handleAddWishlist(product)} className="p-1 rounded-full hover:bg-gray-200">
                  <FaHeart className="h-5 w-5" />
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaEye className="h-5 w-5" />
                </button>
              </div>

              {/* Product Image */}
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

              {/* Product Info */}
              <h3 className="text-sm font-semibold mb-1">
                {product.productName}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold text-lg">
                  Tk {product.price.new}
                </span>
                {product.price.old && (
                  <span className="text-gray-400 line-through">
                    Tk {product.price.old}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 text-yellow-500 text-sm mt-1">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {product.rating % 1 !== 0 && <span>☆</span>}
                <span className="text-gray-400">({product.review})</span>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BestSellingProducts;
