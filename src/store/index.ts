import {
  configureStore,
  ThunkAction,
  Action
} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice'

const reducer = { auth: authSlice };

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
