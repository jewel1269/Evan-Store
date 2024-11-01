import React, { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeToCart, updateQuantity } from "../../Redux/features/product";
import toast from "react-hot-toast";

function Cart() {
  const items = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [deliveryFee, setDeliveryFee] = useState(100);
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    // Simulate async action or call payment API
    setTimeout(() => {
      setLoading(false); // Stop loading spinner
      navigate("/bilingSystem"); // Navigate after process completes
    }, 2000); // Mock async delay
  };

  const calculateSubtotal = () =>
    items.reduce(
      (sum, item) => sum + deliveryFee + item.price?.new * item.quantity,
      0
    );

  const handleQuantityChange = (id, amount) => {
    dispatch(updateQuantity({ id, amount }));
    toast.success("Product quantity updated successfully!");
  };

  const removeItem = (item) => {
    dispatch(removeToCart(item._id));
    toast.success(`${item.productName} removed successfully!`);
  };

  return (
    <div className="max-w-8xl mx-auto p-6">
      <nav className="text-gray-600 text-sm flex mb-4">
        <Link to="/" className="hover:text-red-500 flex items-center">
          <CiBoxList className="black" style={{ color: "black" }} />
          Home
        </Link>{" "}
        /{" "}
        <span className="text-gray-800 font-semibold">
          Cart ({items.length})
        </span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6 max-w-8xl">
        {/* Left Section: Cart Items Table */}
        <div className="w-full lg:w-2/3">
          <div className="table-container border border-gray-200 rounded-lg lg:p-4 mb-6">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="py-3 flex items-center">
                      <NavLink to={`/productDetails/${item?._id}`}>
                        <div className="flex justify-center mb-4">
                          <img
                            src={
                              item.image && item.image[0]
                                ? `http://localhost:5000/${item.image[0].replace(
                                    /\\/g,
                                    "/"
                                  )}`
                                : "default-image-url.jpg"
                            }
                            alt="Product"
                            className="w-16 h-16 rounded-lg"
                          />
                        </div>
                      </NavLink>
                      {item.productName}
                    </td>
                    <td>Tk {item.price?.new}</td>
                    <td className="flex lg:-mt-20 items-center">
                      <button
                        onClick={() => handleQuantityChange(item._id, -1)}
                        className="bg-gray-200 px-2 py-1 rounded-l"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item._id, 1)}
                        className="bg-gray-200 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </td>
                    <td>Tk {item.price?.new * item.quantity}</td>
                    <td>
                      <ImCross
                        className="cursor-pointer text-red-500"
                        onClick={() => removeItem(item)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mb-6">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded border">
              Return To Shop
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded border">
              Reset Cart
            </button>
          </div>
        </div>

        {/* Right Section: Coupon and Cart Total */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-200 rounded-l p-2 w-full"
            />
            <button className="bg-red-500 text-white px-4 rounded-r">
              Apply Coupon
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>Tk {calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Tk {deliveryFee}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>Tk {calculateSubtotal()}</span>
            </div>

            <button
              onClick={handlePayment}
              className="mt-4 w-full hover:bg-green-600 bg-red-500 text-white py-2 rounded flex justify-center items-center"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Proceed to checkout"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
