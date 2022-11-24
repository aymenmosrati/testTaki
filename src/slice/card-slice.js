import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("cardSlice/fetchData", async () => {
  const res = await axios.get("http://localhost:3000/data");
  const data = await res.json();
  return data;
  console.log(data);
});

const cardSlice = createSlice({
  initialStat: [],
  name: "cardSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData);
  },
});
