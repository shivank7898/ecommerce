import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart")) || [],
    notification: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity += quantity;
        state.notification = "Updated quantity";
        if (state.items[existingProductIndex].quantity <= 0) {
          state.items.splice(existingProductIndex, 1);
          state.notification = "Removed item from cart";
        }
      } else {
        state.items.push({ product, quantity });
        state.notification = `Added ${product.title} to cart`;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeCart: (state, action) => {
      const { id } = action.payload;
      const updatedCart = state.items.filter((item) => item.product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.items = updatedCart;
      state.notification = "Removed item from cart";
    },

    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { addToCart, removeCart, clearNotification } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
