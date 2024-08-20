import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
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
    },

    removeCart: (state, action) => {
      const { id } = action.payload;
      // console.log(id)
      const updatedCart = state.items.filter((item) => item.product.id !== id);
      state.items = updatedCart;
      // console.log(state.items)
      state.notification = "Removed item from cart";
    },

    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { addToCart, removeCart, clearNotification } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
