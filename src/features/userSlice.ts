import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: { user: { user: any } }) => state.user.user;

export default userSlice.reducer;
