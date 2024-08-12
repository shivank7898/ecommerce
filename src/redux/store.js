import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import { categoryReducer } from "./slices/categorieSlice";
import { cartReducer } from "./slices/cartSlice";
import { wishReducer } from "./slices/wishSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    wish: wishReducer,
  },
});

export default store;
