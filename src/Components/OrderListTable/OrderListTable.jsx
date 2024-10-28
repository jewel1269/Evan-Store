import React from "react";

const OrderListTable = ({ orders }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden ">
    <h1 className="font-bold p-4">My Orders</h1>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-5 py-3 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th className="px-5 py-3 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Date
            </th>
            <th className="px-5 py-3 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-5 py-5 bg-white text-sm">
                <img
                  className="w-16 h-16 rounded-md object-cover"
                  src={order.image}
                  alt={order.name}
                />
              </td>
              <td className="px-5 py-5 bg-white text-sm text-gray-900">
                {order.name}
              </td>
              <td className="px-5 py-5 bg-white text-sm text-right text-gray-900">
                Tk {order.price}
              </td>
              <td className="px-5 py-5 bg-white text-sm text-center text-gray-900">
                {order.date}
              </td>
              <td className="px-5 py-5 bg-white text-sm text-right">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  Invoice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage with sample data
const orders = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4Fo2rTO4AovAp8Qpz4bg9p_UkHTmEkNXIQ&s",
    name: "LCD Monitor",
    price: 250,
    date: "2024-10-28",
  },
  {
    image: "https://via.placeholder.com/64",
    name: "H1 Gamepad",
    price: 100,
    date: "2024-10-27",
  },
  {
    image: "https://via.placeholder.com/64",
    name: "Wireless Keyboard",
    price: 50,
    date: "2024-10-26",
  },
];

export default function OrderList() {
  return (
    <div className="p-8">
      <OrderListTable orders={orders} />
    </div>
  );
}
