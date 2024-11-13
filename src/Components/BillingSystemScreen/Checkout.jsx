import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { removeToAllCart } from "../../Redux/features/product";

function Checkout() {
  const items = useSelector((state) => state.product.products);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("Cash on delivery");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userEmail = localStorage.getItem("userEmail");

  const calculateSubtotal = () =>
    items.reduce((sum, item) => sum + item.price.new * item.quantity, 0);
 
  const removeItem = (items) => {
    dispatch(removeToAllCart(items));
  };

  const handleInvoice = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate required fields
    if (!firstName || !lastName || !address || !city || !phone || !email) {
      toast.error("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    const orderData = {
      billingDetails: {
        firstName,
        lastName,
        address,
        apartment,
        city,
        phone,
        email,
      },
      items: items.map((item) => ({
        productId: item._id,
        productName: item.productName,
        price: item.price.new,
        quantity: item.quantity,
      })),
      paymentMethod: selectedPayment,
      subtotal: calculateSubtotal(),
      userEmail,
      shipping: 100,
      total: calculateSubtotal() + 100,
    };

    try {
      await axios.post("https://evan-store-server.vercel.app/order/api/orders", orderData);
      toast.success("Order Successfully Complete");
      navigate("/thankyou");
      removeItem(items)
    } catch (error) {
      console.error("Order submission failed", error);
      toast.error("Order submission failed");
    } finally {
      setIsLoading(false);
    }
  };

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
          <form className="space-y-4" onSubmit={handleInvoice}>
            <div>
              <label className="block text-gray-600">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName} // Changed to lastName
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Town/City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel" // Changed to type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full hover:bg-green-600 bg-red-500 text-white py-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Placing Order..." : "Place Order"}
            </button>
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
                <span>Tk {item.price.new * item.quantity}</span>
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
              <span>Tk {calculateSubtotal() + 100}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
