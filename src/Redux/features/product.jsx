import { createSlice } from "@reduxjs/toolkit";

// Function to get initial state from localStorage
const getInitialState = () => {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts")) || [];
  return {
    products: cartProducts,
    wishlist: wishlistProducts,
  };
};

const initialState = getInitialState();

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("cartProducts", JSON.stringify(state.products)); 
    },
    removeToCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products)); 
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const product = state.products.find(product => product._id === id);
    
      if (product) {
        // Ensure quantity is a number and fallback to 1 if it’s undefined
        const currentQuantity = product.quantity ? parseInt(product.quantity, 10) : 1;
    
        // Update quantity, ensuring it doesn't go below 1
        product.quantity = Math.max(1, currentQuantity + amount);
    
        // Save updated products to localStorage
        localStorage.setItem("cartProducts", JSON.stringify(state.products));
      }
    },
    

    addWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem("wishlistProducts", JSON.stringify(state.wishlist));
    },
    removeWishlist: (state, action) => {
      // Expect action.payload to be just the ID
      state.wishlist = state.wishlist.filter(
        (product) => product._id !== action.payload
      );
      localStorage.setItem("wishlistProducts", JSON.stringify(state.wishlist)); 
    },
  },
});

export default productSlice.reducer;
export const { addToCart, removeToCart, addWishlist, removeWishlist, updateQuantity } = productSlice.actions;
