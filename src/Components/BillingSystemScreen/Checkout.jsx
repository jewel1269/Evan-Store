import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const items = useSelector((state) => state.product.products);

  const [selectedPayment, setSelectedPayment] = useState("Cash on delivery");
  const navigate = useNavigate();

  const handleInvoice = () => {
    navigate("/invoice");
  };

  const calculateSubtotal = () =>
    items.reduce((sum, item) => sum  + item.price.new, 0);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <nav className="text-gray-600 text-sm mb-4">
        <span>
          <Link to={"/"} className="hover:text-red-600">
            Home
          </Link>{" "}
          /{" "}
          <Link to={"/cart"} className="hover:text-red-600">
            View Cart
          </Link>{" "}
          / <span className="font-semibold text-gray-800">Checkout</span>
        </span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Billing Details */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600">Company Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Town/City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-600">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="border border-gray-200 divide-y-2 rounded-lg p-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.productName}</span>
                <span>Tk {item.price.new}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>Tk {calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Tk 100</span>
            </div>
            <div className="flex justify-between font-semibold mb-4">
              <span>Total:</span>
              <span>Tk {calculateSubtotal()}</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on delivery"
                  checked={selectedPayment === "Cash on delivery"}
                  onChange={() => setSelectedPayment("Cash on delivery")}
                  className="mr-2"
                />
                <label>Cash on delivery</label>
              </div>
            </div>

            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-300 rounded-l p-2 w-full"
              />
              <button className="bg-red-500 text-white px-4 rounded-r">
                Apply Coupon
              </button>
            </div>
            <button
              onClick={handleInvoice}
              className="w-full hover:bg-green-600 bg-red-500 text-white py-2 rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
