import { createSlice } from "@reduxjs/toolkit";

const url = "https://fakestoreapi.com";
const initialState = {
  loading: false,
  err: null,
  data: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategoryStart: (state) => {
      state.loading = true;
    },
    setCategory: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setCategoryErr: (state, action) => {
      state.err = action.payload;
      state.loading = false;
    },
  },
});

export const { setCategory, setCategoryErr, setCategoryStart } =
  categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
