import { createSlice } from "@reduxjs/toolkit";
import { RootState, register } from "store";

export type AuthState = {
  data: string;
  pending: boolean;
  error: boolean;
};

const initialState: AuthState = {
  data: "",
  pending: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.pending = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(register.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
