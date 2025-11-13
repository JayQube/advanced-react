import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // Ожидаем строку
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    // Ожидаем строку
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  // Данные, которые вернет сервер (объект с данными или ошибка)
  // попадет в action.payload что ниже
  extraReducers: (builder) => {
    builder
      // Что происходит со стейтом пока идет запрос на сервер
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      // Что происходит, когда запрос выполнился успешно
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      // Что происходит если произошла ошибка
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Экспортируем для использования. Обращаемся по названиям
// loginActions и loginReducer
export const {
  actions: loginActions,
  reducer: loginReducer,
} = loginSlice;
