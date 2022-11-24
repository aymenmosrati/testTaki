// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   user: [],
//   status: "idle",
//   error: null,
// };

// export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
//   let data;
//   try {
//     const response = await axios.get(`/api/account/me`);
//     data = await response.data;
//     if ((response.status = 200)) {
//       return data;
//     }
//     throw new Error(response.statusText);
//   } catch (err) {
//     console.log(err);
//     return Promise.reject(err.message ? err.message : data?.message);
//   }
// });

// const slice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     op:(state,action)= ()=>{
//       state.user = {}

//     }
//   },
//   extraReducers: {
//     [fetchUser.pending]: (state) => {
//       state.status = "loading";
//     },
//     [fetchUser.fulfilled]: (state, action) => {
//       state.status = "succeeded";
//       state.user = action.payload.user;
//     },
//     [fetchUser.rejected]: (state, action) => {
//       state.status = "failed";
//       state.error = action.payload;
//     },
//   },
// });

// export const reducer = slice.reducer;

// export default slice;
