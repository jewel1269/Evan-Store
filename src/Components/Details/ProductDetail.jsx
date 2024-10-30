import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReletedItem from "./ReletedItem";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("white");
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch product data with id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/Api/byGetProduct/${id}`
        );
        setProduct(response.data);
        setMainImage(`http://localhost:5000/${response.data.image[0]}`);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();
    navigate("/billingSystem");
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-8xl flex flex-col justify-center mx-auto lg:p-6">
      <nav className="text-gray-600 text-sm mb-4">
        <span>
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>{" "}
          / ProductDetails /{" "}
          <span className="font-semibold text-gray-800">
            {product.productName}
          </span>
        </span>
      </nav>

      <div className="flex flex-col   justify-center lg:flex-row gap-8">
        {/* Left Section: Product Images */}
        <div className="lg:flex  lg:gap-5 items-center lg:w-1/2">
          <div className="grid lg:grid-cols-1 grid-cols-3 lg:gap-2 mb-4">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={`http://localhost:5000/${img}`}
                alt={`Product view ${index + 1}`}
                className="w-24 h-24 border border-gray-200 cursor-pointer"
                onClick={() => setMainImage(`http://localhost:5000/${img}`)}
              />
            ))}
          </div>
          <div>
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-2">{product.productName}</h2>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">
              {"★".repeat(product.rating)}
            </span>
            <span className="text-gray-500">({product.review} Reviews)</span>
            <span className="ml-4 text-green-600 font-medium">
              {product.instock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <div className="lg:flex lg:gap-5 items-center">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Tk {product.price.new}
            </p>
            <p className="text-lg font-semibold line-through text-gray-500 mb-4">
              Tk {product.price.old}
            </p>
          </div>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <hr />

          <div className="flex gap-3 items-center mt-2 mb-4">
            <span className="block font-semibold mb-1">Colors:</span>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full ${
                    selectedColor === color
                      ? "border-2 border-red-500"
                      : "border border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center mt-2 gap-3 mb-4">
            <span className="block font-semibold mb-1">Size:</span>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
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

          <div className="flex items-center mb-4">
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
            <button
              onClick={handleOrder}
              className="ml-4 bg-red-500 text-white px-6 py-2 rounded"
            >
              Buy Now
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CiDeliveryTruck />
              <div>
                {product.delivery.freedelivery === true ? (
                  <p className="font-semibold">Free Delivery Available</p>
                ) : (
                  <p className="font-semibold">Free Delivery Not Available</p>
                )}
                <p className="text-gray-500 text-sm">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GiReturnArrow />
              <div>
                {product.delivery.returnpolicy ? (
                  <p className="font-semibold">
                    {product.delivery.returnpolicy}
                  </p>
                ) : (
                  <p className="font-semibold">No Return Delivery</p>
                )}
                <p className="text-gray-500 text-sm">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReletedItem />
      </div>
    </div>
  );
}

export default ProductDetail;
