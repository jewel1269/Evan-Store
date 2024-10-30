// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/product';


const store = configureStore({
  reducer: {
    product: productReducer, 
  },
});

export default store;
