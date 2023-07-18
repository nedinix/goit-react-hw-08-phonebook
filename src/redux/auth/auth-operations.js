import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      toast.success(
        `You have successfully registered. Welcome, ${data.user.name} !`
      );
      return data;
    } catch (e) {
      toast.error('Authorization error. Try again, please');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      toast.success(`Welcome, ${data.user.name} !`);
      return data;
    } catch (e) {
      toast.error('Authorization error. Try again, please');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
      toast('You are logged out');
    } catch (e) {
      toast.error('Authorization error. Try again, please');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      toast('Unable to authorization user');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current', credentials);
      return data;
    } catch (e) {
      toast(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
