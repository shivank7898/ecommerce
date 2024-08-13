import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com";
const initialState = {
  products: {
    loading: false,
    err: null,
    data: null,
  },
  limit: {
    loading: false,
    err: null,
    data: null,
  },
  productDetails: {
    loading: false,
    err: null,
    data: null,
  },
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    // console.log("first");
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      // console.log(response.data)
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const limitProducts = createAsyncThunk(
  "products/limitProducts",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/products?limit=${limit}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data || "An error occurred");
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    // console.log(id)
    try {
      const response = await axios.get(`${url}/products/${id}`);
      //   console.log(response.data)
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data || "An error occurred");
    }
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetching all products
      .addCase(fetchProducts.pending, (state) => {
        state.products.loading = true;
        state.products.err = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.data = action.payload;
        state.products.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products.err = action.payload || action.error.message;
        state.products.loading = false;
      })
      // Fetching limited products
      .addCase(limitProducts.pending, (state) => {
        state.limit.loading = true;
        state.limit.err = null;
      })
      .addCase(limitProducts.fulfilled, (state, action) => {
        state.limit.data = action.payload;
        state.limit.loading = false;
      })
      .addCase(limitProducts.rejected, (state, action) => {
        state.limit.err = action.payload || action.error.message;
        state.limit.loading = false;
      })
      // Fetch product details
      .addCase(fetchProductDetails.pending, (state) => {
        state.productDetails.loading = true;
        state.productDetails.err = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productDetails.data = action.payload;
        state.productDetails.loading = false;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.productDetails.err = action.payload || action.error.message;
        state.productDetails.loading = false;
      });
  },
});

export default productsSlice.reducer;
export const productReducer = productsSlice.reducer;
