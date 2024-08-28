import { createSlice } from "@reduxjs/toolkit";

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

const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProductStart: (state) => {
      state.products.loading = true;
    },
    setProducts: (state, action) => {
      state.products.data = action.payload;
      state.products.loading = false;
    },
    setProductsErr: (state, action) => {
      state.products.err = action.payload;
      state.products.loading = false;
    },
    setProductDetails: (state, action) => {
      state.productDetails.data = action.payload;
      state.productDetails.loading = false;
    },
    setProductDetailsErr: (state, action) => {
      state.productDetails.err = action.payload;
      state.productDetails.loading = false;
    },
  },
});

export const {
  setProducts,
  setProductsErr,
  setProductDetails,
  setProductDetailsErr,
  setProductStart,
} = productsSlice.actions;

export default productsSlice.reducer;
export const productReducer = productsSlice.reducer;
