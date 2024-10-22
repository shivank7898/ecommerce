import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./cartSlice";
import { wishProduct } from "../../components/productCard/ProductCard";

interface WishState{
  items: wishProduct[]
  notification: string | null
} 

 const initialState: WishState= {
    items: [],
    notification: null,
  }

const wishSlice = createSlice({
  name: "wish",
  initialState: initialState,
  reducers: {
    addToWish: (state, action: PayloadAction<{product: Product}>) => {
      const { product } = action.payload;
      console.log(product)
      state.items.push({ product });
      localStorage.setItem("wish", JSON.stringify(state));
      state.notification = `Added ${product.title} to cart`;
    },

    removeWish: (state, action) => {
      const { id } = action.payload;

      state.items = state.items.filter((item) => item.product?.id !== id);
      localStorage.setItem("wish", JSON.stringify(state.items));
      state.notification = "Removed item from cart";
    },

    clearWishNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { addToWish, removeWish, clearWishNotification } =
  wishSlice.actions;
export const wishReducer = wishSlice.reducer;
