import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating ;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  notification: string | null;
}

const initialState: CartState = {
    items: [],
    notification: null,
  }
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{product: Product, quantity: number}>) => {     
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

    removeCart: (state, action: PayloadAction<{id: number}>) => {
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
