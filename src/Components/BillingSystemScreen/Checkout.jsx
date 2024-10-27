import React, { useState } from "react";

function Checkout() {
  const [items] = useState([
    { id: 1, name: "LCD Monitor", price: 650 },
    { id: 2, name: "H1 Gamepad", price: 1100 },
  ]);
  const [selectedPayment, setSelectedPayment] = useState("Cash on delivery");

  const calculateSubtotal = () =>
    items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <nav className="text-gray-600 text-sm mb-4">
        <span>
          Account / My Account / Product / View Cart /{" "}
          <span className="font-semibold text-gray-800">Checkout</span>
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
          <div className="border border-gray-200 rounded-lg p-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold mb-4">
              <span>Total:</span>
              <span>${calculateSubtotal()}</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="Bank"
                  checked={selectedPayment === "Bank"}
                  onChange={() => setSelectedPayment("Bank")}
                  className="mr-2"
                />
                <label>Bank</label>
                <img
                  src="/images/payment-icons.png"
                  alt="Payment methods"
                  className="w-1/3 ml-2"
                />
              </div>
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
            <button className="w-full bg-red-500 text-white py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
