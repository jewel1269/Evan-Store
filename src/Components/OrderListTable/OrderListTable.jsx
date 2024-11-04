import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderListTable = ({ orders }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <h1 className="font-bold p-4">My Orders</h1>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="px-5 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-5 py-2 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th className="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Date
            </th>
            <th className="px-5 py-2 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.items?.length > 0 ? (
            orders.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-5  bg-white text-sm">
                  <div className="flex justify-center mb-4">
                    <img
                      src={
                        item.image && item.image[0]
                          ? `http://localhost:5000/${item.image[0].replace(
                              /\\/g,
                              "/"
                            )}`
                          : "/path/to/placeholder-image.jpg"
                      }
                      alt={item.productName}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  </div>
                </td>
                <td className="px-5 py-5 bg-white text-sm text-gray-900">
                  {item.productName}
                </td>
                <td className="px-5 py-5 bg-white text-sm text-right text-gray-900">
                  Tk {item.price}
                </td>
                <td className="px-5 py-5 bg-white text-sm text-center text-gray-900">
                  {item.quantity}
                </td>
                <td className="px-5 py-5 bg-white text-sm text-center text-gray-900">
                  {new Date(orders.createdAt).toLocaleDateString()}
                </td>
                <td className="px-5 py-5 bg-white text-sm text-right">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center px-5 py-5 bg-white text-sm text-gray-900"
              >
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default function OrderList() {
  const [orders, setOrders] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      fetchOrder(email);
    }
  }, []);

  const fetchOrder = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/order/api/singleOrder`,
        { params: { email } }
      );
      setOrders(response.data);
      console.log("Order data:", response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
      setError("Could not fetch orders. Please try again later.");
    }
  };

  return (
    <div className="p-8">
      {error && <div className="text-red-500">{error}</div>}{" "}
      {/* Display error message */}
      {orders.items ? (
        <OrderListTable orders={orders} />
      ) : (
        <div>Loading...</div>
      )}{" "}
      {/* Handle loading state */}
    </div>
  );
}
