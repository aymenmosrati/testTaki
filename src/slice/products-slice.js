import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all products 
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (query, thunkAPI) => {
    let data;
    try {
      const res = await axios.get("http://localhost:3000/data");
      data = await res.data;
      if (res.status == "200") {
        // thunkAPI.dispatch(getall);
        return data;
        // console.log("data", data);
      }
      throw new Error(res.statusText);
    } catch (err) {
      console.log(err);
      return Promise.reject(err.message ? err.message : data?.message);
    }
  }
);

// update isBookmarked true or false 
export const updateProducts = createAsyncThunk("productsSlice/updateProducts", async (items, thunkAPI) => {
  console.log(items.id);  
  try {
      const res = await axios.patch(`http://localhost:3000/data/${items.id}`, {
        isBookmarked: !items.isBookmarked,
      });
      if (res.status == "200") {
        thunkAPI.dispatch(fetchProducts());
      }
      throw new Error(res.statusText);
    } catch (err) {
      console.log(err);
      // return Promise.reject(err.message ? err.message : res?.data?.message);
    }
  });

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {
    bookmargs: (state, action) => {
      state.updateBookmargs.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
