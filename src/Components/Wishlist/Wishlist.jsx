import React from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, removeWishlist } from "../../Redux/features/product";
import toast from "react-hot-toast";

const Wishlist = () => {
  const items = useSelector((state) => state.product.wishlist);
  const dispatch = useDispatch();

  const AddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeWishlist(item._id));
    toast.success(`${item.productName} added to cart!`); 
  };

  const deleteFromWishlist = (id) => {
    dispatch(removeWishlist(id)); 
    toast.success(`Item removed from wishlist!`); 
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Wishlist ({items.length})</h2>
        <button
          className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          disabled={items.length === 0}
        >
          Move All To Bag
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Original Price</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="py-4 px-4 border-b">
                  <NavLink to={`/productDetails/${item._id}`}>
                    <img
                      src={`http://localhost:5000/${item.image[0].replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt={item.productName}
                      className="w-20 h-20 object-cover rounded-md shadow-sm"
                    />
                  </NavLink>
                </td>
                <td className="py-4 px-4 border-b">{item.productName}</td>
                <td className="py-4 px-4 border-b text-red-500 font-bold">
                  Tk {item.price.new}
                </td>
                <td className="py-4 px-4 border-b text-gray-500 line-through">
                  Tk {item.price.old}
                </td>
                <td className="py-4 px-4 mt-6 flex space-x-2">
                  <button
                    onClick={() => AddToCart(item)}
                    className="text-black hover:text-blue-500 transition-colors duration-200"
                    aria-label={`Add ${item.productName} to cart`}
                  >
                    <FaShoppingCart className="inline-block h-6 w-6 " />
                  </button>
                  <button
                    onClick={() => deleteFromWishlist(item._id)}
                    className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                    aria-label={`Remove ${item.productName} from wishlist`}
                  >
                    <FaTrash className="inline-block h-6 w-6" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                No items in the wishlist.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
