import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart } from "../../Redux/features/product";
import { useDispatch } from "react-redux";

function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [priceRange, setPriceRange] = useState(1500);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sortOrder, setSortOrder] = useState("default");
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const dispatch = useDispatch();

  //add to cart
  const AddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.productName} added successfully!`);
  };

 

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product/Api/byGetProduct"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter and sort products based on selected options
  const filteredProducts = products.filter(
    (product) =>
      (!selectedColor || product.colors.includes(selectedColor)) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      product.price.new <= priceRange &&
      (!selectedSize || product.sizes.includes(selectedSize))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-high-to-low") return b.price.new - a.price.new;
    if (sortOrder === "price-low-to-high") return a.price.new - b.price.new;
    return 0;
  });

  // Handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 bg-gray-50">
      {/* Sidebar Filter */}
      <aside className="lg:w-1/4 p-6 bg-white rounded-lg lg:sticky shadow-lg top-4 h-fit mb-6 lg:mb-0">
        <h2 className="text-xl font-semibold">Filter</h2>

        {/* Category Filter */}
        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">Category</h3>
          <hr />
          <ul className="mt-4 space-y-2">
            {[
              "Woman_Fashion",
              "Men_Fashion",
              "Electronics",
              "Home_Lifestyle",
              "Baby_Toys",
              "Health_Beauty",
            ].map((category) => (
              <li key={category} className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={() => handleCategoryClick(category)}
                    checked={selectedCategories.includes(category)}
                  />
                  <span>{category.replace(/_/g, " ")}</span>
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
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  selectedSize === size ? "bg-blue-500 text-white" : ""
                }`}
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
            {[
              { name: "Red", colorClass: "bg-red-500" },
              { name: "Blue", colorClass: "bg-blue-500" },
              { name: "Green", colorClass: "bg-green-500" },
              { name: "White", colorClass: "bg-white border border-gray-300" }, // add border for visibility
              { name: "Black", colorClass: "bg-black" },
            ].map(({ name, colorClass }) => (
              <button
                key={name}
                onClick={() => handleColorClick(name)}
                className={`w-6 h-6 rounded-full ${colorClass} ${
                  selectedColor === name
                    ? "ring-2 ring-offset-2 ring-blue-500"
                    : ""
                }`}
                aria-label={`Select ${name}`}
              ></button>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="lg:w-3/4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            {sortedProducts.length} results for {selectedCategories}
          </h1>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
            onChange={handleSortChange}
          >
            <option value="default">Sort by: Popular</option>
            <option value="price-high-to-low">
              Sort by: Price (High to Low)
            </option>
            <option value="price-low-to-high">
              Sort by: Price (Low to High)
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow">
              <div className="relative">
                {product.NewArrival && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    New 
                  </span>
                )}
                {product.bestSale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded">
                    Best 
                  </span>
                )}
                <NavLink to={`/productDetails/${product._id}`}>
                  <div className="flex justify-center mb-4">
                    <img
                      src={`http://localhost:5000/${product.image[0].replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt={product.productName}
                      className="w-60 h-48 rounded-lg"
                    />
                  </div>
                </NavLink>
              </div>
              <div className="mt-4">
                <h2 className="text-sm text-gray-500">
                  {product.category.replace(/_/g, " ")}
                </h2>
                <p className="text-md font-medium">{product.productName}</p>
                <p className="text-lg font-bold text-blue-600">
                  Tk {product.price.new}.00
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-red-500 mt-1">
                  {product.review} reviews
                </p>
                <button onClick={()=>AddToCart(product)} className="btn btn-primary hover:btn-accent btn-xs">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
