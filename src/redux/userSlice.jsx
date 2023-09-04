import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    token: "",
    message: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload;
      state.isAuthenticated = action.payload.success;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
