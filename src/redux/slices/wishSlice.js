import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: JSON.parse(localStorage.getItem("wish")) || [],
  reducers: {
    addToWish: (state, action) => {
      const { product } = action.payload;

      state.push({ product });
      localStorage.setItem("wish", JSON.stringify(state));
    },

    removeWish: (state, action) => {
      const { id } = action.payload;
      // console.log(id, "wish1",state);
      const updatedWish = state.filter((item) => item.product.id !== id);
      // console.log(updatedWish,"updated")
      localStorage.setItem("wish", JSON.stringify(updatedWish));
      return updatedWish;
    },
  },
});

export const { addToWish, removeWish } = wishSlice.actions;
export const wishReducer = wishSlice.reducer;
