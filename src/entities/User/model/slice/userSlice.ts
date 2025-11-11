import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// Экспортируем для использования и задаем названия counterActions
// counterReducer
export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
