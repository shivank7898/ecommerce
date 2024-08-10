import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com";
const initialState = {
  loading: false,
  err: null,
  data: null,
};

export const fetchCategory = createAsyncThunk(
  "/category",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/products/categories`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data || "An error occurred");
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetching all products
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
        state.err = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.err = action.payload || action.error.message;
        state.loading = false;
      });
  },
});

// export default categorySlice.reducer
export const categoryReducer = categorySlice.reducer;
