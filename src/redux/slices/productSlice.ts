import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Product } from "./cartSlice";

const url = "https://fakestoreapi.com";

export type AppError = AxiosError | null | string | Error

interface initialStateType{
  products:{
    loading: boolean
    err: AppError
    data: Product[] | null
  }
  productDetails: {
    loading: boolean
    err: AppError
    data: Product | null
  }
}

const initialState: initialStateType = {
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
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products.data = action.payload;
      state.products.loading = false;
    },
    setProductsErr: (state, action: PayloadAction<AppError>) => {
      state.products.err = action.payload;
      state.products.loading = false;
    },
    setProductDetails: (state, action: PayloadAction<Product>) => {
      state.productDetails.data = action.payload;
      state.productDetails.loading = false;
    },
    setProductDetailsErr: (state, action: PayloadAction<AppError>) => {
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
