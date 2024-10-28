import React, { useState } from 'react';

function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [priceRange, setPriceRange] = useState(100);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sortOrder, setSortOrder] = useState('default');

  const products = [
    {
      id: 1,
      brand: 'Uniqlo',
      name: 'Shirt Soft Cotton',
      price: 40,
      color: 'bg-blue-500',
      size: 'M',
      rating: 4,
      reviews: 20,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjYHcLtEIRjhslJzOKmfRHMAAWcc98POWqQ&s",
      isNew: true,
      colors: ["bg-blue-500", "bg-green-500"]
    },
    {
      id: 1,
      brand: 'Uniqlo',
      name: 'Shirt Soft Cotton',
      price: 40,
      color: 'bg-blue-500',
      size: 'M',
      rating: 4,
      reviews: 20,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjYHcLtEIRjhslJzOKmfRHMAAWcc98POWqQ&s",
      isNew: true,
      colors: ["bg-blue-500", "bg-green-500"]
    },
    {
      id: 1,
      brand: 'Uniqlo',
      name: 'Shirt Soft Cotton',
      price: 40,
      color: 'bg-blue-500',
      size: 'M',
      rating: 4,
      reviews: 20,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjYHcLtEIRjhslJzOKmfRHMAAWcc98POWqQ&s",
      isNew: true,
      colors: ["bg-blue-500", "bg-green-500"]
    },
    {
      id: 1,
      brand: 'Uniqlo',
      name: 'Shirt Soft Cotton',
      price: 40,
      color: 'bg-blue-500',
      size: 'M',
      rating: 4,
      reviews: 20,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjYHcLtEIRjhslJzOKmfRHMAAWcc98POWqQ&s",
      isNew: true,
      colors: ["bg-blue-500", "bg-green-500"]
    },
    {
      id: 2,
      brand: 'Mens Fashion',
      name: 'Jacket',
      price: 120,
      color: 'bg-red-500',
      size: 'L',
      rating: 5,
      reviews: 15,
      imgSrc: "https://via.placeholder.com/150",
      isNew: false,
      colors: ["bg-red-500", "bg-black"]
    },
  ];

  const filteredProducts = products
    .filter(product => !selectedColor || product.color === selectedColor)
    .filter(product => selectedBrands.length === 0 || selectedBrands.includes(product.brand))
    .filter(product => product.price <= priceRange)
    .filter(product => !selectedSize || product.size === selectedSize);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'price-high-to-low') return b.price - a.price;
    if (sortOrder === 'price-low-to-high') return a.price - b.price;
    return 0;
  });

  const handleColorClick = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 bg-gray-50">
      {/* Sidebar Filter */}
      <aside className="lg:w-1/4 p-6 bg-white rounded-lg lg:sticky shadow-lg top-4 h-fit mb-6 lg:mb-0">
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
            {['Womans Fashion', 'Mens Fashion', 'Electronics', 'Home & Lifestyle', 'Babys & Toys', 'Health & Beauty'].map((brand) => (
              <li key={brand} className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={() => handleBrandClick(brand)}
                    checked={selectedBrands.includes(brand)}
                  />
                  <span>{brand}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium">Price</h3>
          <div className="flex items-center justify-between mt-2">
            <span>{priceRange} Tk</span>
            <span>10000 Tk</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full mt-2"
          />
        </div>

        {/* Size Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium">Size</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded-md text-sm ${selectedSize === size ? 'bg-blue-500 text-white' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium">Color</h3>
          <div className="flex items-center gap-2 mt-2">
            {['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-gray-500'].map((color) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                className={`w-6 h-6 rounded-full ${color} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                aria-label={`Select ${color}`}
              ></button>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="lg:w-3/4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">{sortedProducts.length} results for clothes</h1>
          <select className="px-4 py-2 border border-gray-300 rounded-md" onChange={handleSortChange}>
            <option value="default">Sort by: Popular</option>
            <option value="price-high-to-low">Sort by: Price (High to Low)</option>
            <option value="price-low-to-high">Sort by: Price (Low to High)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <div className="relative">
                {product.isNew && <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New Arrival</span>}
                <img src={product.imgSrc} alt="Product" className="w-full rounded-md" />
              </div>
              <div className="mt-4">
                <h2 className="text-sm text-gray-500">{product.brand}</h2>
                <p className="text-md font-medium">{product.name}</p>
                <p className="text-lg font-bold text-blue-600">Tk {product.price}.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-red-500 mt-1">{product.reviews} reviews</p>
                <button className="btn btn-primary hover:btn-accent btn-xs">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
