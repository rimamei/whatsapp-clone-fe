import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginTypes, RegisterTypes, UserTypes } from '@services';
import { RootState } from '@store';
import { Api } from '@utils';
import { AxiosError, AxiosResponse } from 'axios';

export type AuthState = {
  data: UserTypes;
  status: string;
  error: string;
  isLoggedIn: boolean;
  token: string;
};

export type AuthPayloadTypes = {
  token: string;
  data: UserTypes
}

const initialState: AuthState = {
  token: '',
  data: {
    isOnline: false,
    _id: '',
    name: '',
    email: '',
    lastOnline: '',
    createdAt: '',
  },
  isLoggedIn: false,
  status: '',
  error: '',
};

export const register = createAsyncThunk(
  'auth/register',
  async (data: RegisterTypes, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await Api.post('users/register', data);
      return response.data;
    } catch (error: any | AxiosError) {
      const errMessage = error.response.data.error;
      throw rejectWithValue(errMessage);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginTypes, { rejectWithValue }) => {
    try {
      const response = await Api.post('/users/authenticate', data);
      return response.data;
    } catch (error: any | AxiosError) {
      const errMessage = error.response.data.error;
      throw rejectWithValue(errMessage);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        register.fulfilled,
        (state, { payload }: PayloadAction<AuthPayloadTypes>) => {
          console.log(payload)
          state.status = 'fulfilled';
          state.data = payload.data;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(register.rejected, (state, { payload }: PayloadAction<any>) => {
        state.status = 'error';
        state.error = payload;
      });
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        login.fulfilled,
        (state, { payload }: PayloadAction<UserTypes>) => {
          state.status = 'fulfilled';
          state.data = payload;
          state.isLoggedIn = true;
        }
      )
      .addCase(login.rejected, (state, { payload }: PayloadAction<any>) => {
        state.status = 'error';
        state.error = payload;
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
