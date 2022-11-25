import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: {
    addCart: [],
    updateBookmargs: [],
  },
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      state.addCart.push(action.payload);
    },
    bookmargs: (state, action) => {
      state.updateBookmargs.push(action.payload);
    },
    // deleteFromCart: (state, actions) => {},
    // clear: (state, action) => {},
  },
});

export const { addToCart, bookmargs, deleteFromCart, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
