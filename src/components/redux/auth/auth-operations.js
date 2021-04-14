import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import userErrorMessages from '../../AuthPage/Errors';

axios.defaults.baseURL = 'http://protest-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/api/users/register', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(userErrorMessages.ERROR_AUTHENTICATION);
    console.log('This is error registor', error);
    throw error;
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(userErrorMessages.ERROR_AUTHENTICATION);
    console.log('This is login error', error);
    throw error();
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
