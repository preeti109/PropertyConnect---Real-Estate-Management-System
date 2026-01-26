import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage =
  localStorage.getItem("token");

const initialState = {
  token: tokenFromStorage,
  user: null,
  loaded: false, // hydration flag
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loaded = true;
    },

    setUser(state, action) {
      state.user = action.payload;
      state.loaded = true;
    },

    clearAuth(state) {
      state.token = null;
      state.user = null;
      state.loaded = true;
      localStorage.removeItem("token");
    },
  },
});

export const {
  setAuth,
  setUser,
  clearAuth,
} = authSlice.actions;

export default authSlice.reducer;
