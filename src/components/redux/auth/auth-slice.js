import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRegister: false,
  isFetchingCurrentUser: false,
  isRegisterError: null,
  isLoginError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isRegister = true;
      state.isLoggedIn = false;
    },
    [authOperations.register.pending](state) {
      state.isRegisterError = true;
    },
    [authOperations.register.rejected](state) {
      state.isRegisterError = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.fetchCurrentUser = true;
    },
    [authOperations.logIn.pending](state) {
      state.isLoginError = true;
      state.fetchCurrentUser = false;
    },
    [authOperations.logIn.rejected](state) {
      state.isLoginError = false;
      state.fetchCurrentUser = false;
    },
    [authOperations.googleIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
