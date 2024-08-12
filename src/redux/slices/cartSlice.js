import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      // console.log(product, "cart");
      const existingProductIndex = state?.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += quantity;

        if (state[existingProductIndex].quantity <= 0) {
          state.splice(existingProductIndex, 1);
        }
      } else {
        state.push({ product, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      //   console.log(state);
    },

    removeCart: (state, action) => {
      const { id } = action.payload;
      const updatedCart = state.filter((item) => item.product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
