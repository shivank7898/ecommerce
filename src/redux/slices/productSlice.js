import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com";
const initialState = {
  products: {
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
    try {
      const response = await axios.get(`${url}/products`);
      const data = response.data;
      return data;
    } catch (err) {
      console.error("Error fetching products, using fallback data.", err);
      return fallbackData;
      throw err;
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/products/${id}`);

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
