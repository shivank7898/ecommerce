import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    addToWish: (state, action) => {
      const { product } = action.payload;

      state.push({ product });
      localStorage.setItem("wish", JSON.stringify(state));
    },

    removeWish: (state, action) => {
      const { id } = action.payload;
      const updatedWish = state.filter((item) => item.product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedWish));
      return updatedWish;
    },
  },
});

export const { addToWish, removeWish } = wishSlice.reducer;
export const wishReducer = wishSlice.reducer;
