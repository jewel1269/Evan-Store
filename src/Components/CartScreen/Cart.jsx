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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/bilingSystem");
    }, 2000);
  };

  const calculateSubtotal = () =>
    items.reduce((sum, item) => sum + item.price?.new * item.quantity, 0);

  const handleQuantityChange = (id, amount) => {
    dispatch(updateQuantity({ id, amount }));
    toast.success("Product quantity updated successfully!");
  };

  const removeItem = (item) => {
    dispatch(removeToCart(item._id));
    toast.success(`${item.productName} removed successfully!`);
  };

  return (
    <div className="max-w-8xl mx-auto p-4 sm:p-6 lg:p-10">
      <nav className="text-gray-600 text-sm flex mb-4">
        <Link to="/" className="hover:text-red-500 flex items-center">
          <CiBoxList className="text-black" />
          Home
        </Link>{" "}
        /{" "}
        <span className="text-gray-800 font-semibold">
          Cart ({items.length})
        </span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full overflow-x-auto lg:w-2/3">
          <div className="border border-gray-200 rounded-lg p-4">
            <table className="min-w-full text-left">
              <thead>
                <tr className="text-gray-600">
                  <th className="py-2">Product</th>
                  <th className="hidden lg:table-cell py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="hidden lg:table-cell py-2">Subtotal</th>
                  <th className="py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="py-3 lg:flex items-center">
                      <NavLink to={`/productDetails/${item?._id}`}>
                        <img
                          src={`http://localhost:5000/${item.image[0]?.replace(
                            /\\/g,
                            "/"
                          )}`}
                          alt="Product"
                          className="w-16 h-16 rounded-lg"
                        />
                      </NavLink>
                      <span className="ml-2">{item.productName}</span>
                    </td>
                    <td className="hidden lg:table-cell">
                      Tk {item.price?.new}
                    </td>
                    <td className="flex items-center justify-center space-x-2 py-2">
                      <button
                        onClick={() => handleQuantityChange(item._id, -1)}
                        className="bg-gray-200 text-xl p-2 rounded-md hover:bg-gray-300"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-xl">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item._id, 1)}
                        className="bg-gray-200 text-xl p-2 rounded-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </td>
                    <td className="hidden lg:table-cell">
                      Tk {item.price?.new * item.quantity}
                    </td>
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

          <div className="flex flex-col lg:flex-row justify-between items-center mt-4 space-y-2 lg:space-y-0">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded border">
              Return To Shop
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded border">
              Reset Cart
            </button>
          </div>
        </div>

        {/* Right Section */}
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
              <span>Tk {calculateSubtotal() + deliveryFee}</span>
            </div>

            <button
              onClick={handlePayment}
              className="mt-4 w-full hover:bg-green-600 bg-red-500 text-white py-2 rounded flex justify-center items-center"
              disabled={loading}
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
