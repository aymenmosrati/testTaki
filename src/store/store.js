import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cart-slice";
import productsSlice from "../slice/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
