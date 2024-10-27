import React, { useState } from 'react';

function ProductPage() {
  // State to manage selected color
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex p-8 space-x-6 bg-gray-50 ">
      {/* Sidebar Filter */}
      <aside className="w-1/4 p-6  bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Filter</h2>

        {/* Brand Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium">Brand</h3>
          <input
            type="text"
            placeholder="Search brand..."
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
          <ul className="mt-4 space-y-2">
            {['Nike', 'Adidas', 'Apple', 'New Balance', 'Puma', 'Uniqlo'].map((brand, idx) => (
              <li key={brand} className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{brand}</span>
                </label>
                <span className="text-gray-400">{[123, 55, 45, 99, 135, 10][idx]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium">Price</h3>
          <div className="flex items-center justify-between mt-2">
            <span>2900 SAR</span>
            <span>300,000 SAR</span>
          </div>
          <input type="range" min="2900" max="300000" className="w-full mt-2" />
        </div>

        {/* Size Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium">Size</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button key={size} className="px-3 py-1 border rounded-md text-sm">
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium">Color</h3>
          <div className="flex items-center gap-2 mt-2">
            {['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-gray-500'].map(
              (color) => (
                <button
                  key={color}
                  onClick={() => handleColorClick(color)}
                  className={`w-6 h-6 rounded-full ${color} ${
                    selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  }`}
                  aria-label={`Select ${color}`}
                ></button>
              )
            )}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="w-3/4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">64 results for clothes</h1>
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option>Sort by: Popular</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Product Card */}
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New Arrival</span>
                <img src="https://via.placeholder.com/150" alt="Product" className="w-full rounded-md" />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-sm text-gray-500">Uniqlo</h2>
                <p className="text-md font-medium">Shirt Soft Cotton</p>
                <p className="text-lg font-bold text-blue-600">SAR 40.00</p>
                <p className="text-xs text-red-500 mt-1">12 items left!</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
