import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState{
  user:{
    displayName: string | null
    email: string | null
    id: string 
  } | null
}

const initialState: UserState = JSON.parse(localStorage.getItem("user") || "{}") || { user: {} };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
