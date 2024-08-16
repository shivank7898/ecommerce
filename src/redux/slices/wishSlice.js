import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    items: JSON.parse(localStorage.getItem("wish")) || [],
    notification: null,
  },
  reducers: {
    addToWish: (state, action) => {
      const { product } = action.payload;

      state.items?.push({ product });
      localStorage.setItem("wish", JSON.stringify(state));
      state.notification = `Added ${product.title} to cart`;
    },

    removeWish: (state, action) => {
      const { id } = action.payload;

      state.items = state.items.filter((item) => item.product.id !== id);
      localStorage.setItem("wish", JSON.stringify(state.items));
      state.notification = "Removed item from cart";
    },

    clearWishNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { addToWish, removeWish, clearWishNotification } = wishSlice.actions;
export const wishReducer = wishSlice.reducer;
