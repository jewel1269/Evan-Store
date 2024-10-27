import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1 },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2 }
  ]);

  const handleQuantityChange = (id, increment) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + increment) } 
        : item
    ));
  };

  const calculateSubtotal = () => items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-8xl mx-auto p-6">
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:text-red-500">Home</Link> / <span className="text-gray-800 font-semibold">Cart</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6 max-w-8xl">
        {/* Left Section: Cart Items Table */}
        <div className="w-full lg:w-2/3">
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className="border-t">
                    <td className="py-4 flex items-center">
                      <img src={`/images/${item.name.toLowerCase().replace(' ', '-')}.png`} alt={item.name} className="w-12 h-12 mr-3" />
                      {item.name}
                    </td>
                    <td>${item.price}</td>
                    <td className="flex items-center">
                      <button 
                        onClick={() => handleQuantityChange(item.id, -1)} 
                        className="bg-gray-200 px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)} 
                        className="bg-gray-200 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </td>
                    <td>${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mb-6">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded border">Return To Shop</button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded border">Reset Cart</button>
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
            <button className="bg-red-500 text-white px-4 rounded-r">Apply Coupon</button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${calculateSubtotal()}</span>
            </div>
            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
