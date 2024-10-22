import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppError } from "./productSlice";

const url = "https://fakestoreapi.com";

interface initialStateType{
  loading: boolean,
  err: AppError,
  data: string[] | null,
}

const initialState: initialStateType = {
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
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setCategoryErr: (state, action: PayloadAction<AppError>) => {
      state.err = action.payload;
      state.loading = false;
    },
  },
});

export const { setCategory, setCategoryErr, setCategoryStart } =
  categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
