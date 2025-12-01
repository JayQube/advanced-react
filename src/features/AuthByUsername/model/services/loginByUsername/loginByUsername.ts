import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  // То что возвращает запрос
  User,
  // То что мы передаем
  LoginByUsernameProps,
  // В случае ошибки вернет rejectValue
  { rejectValue: string }
>(
  'login/loginByUsername',
  // authData это объект с полями username и password
  async (authData, thunkAPI) => {
    try {
      // Ожидаем что сервер вернет нам объект User
      const response = await axios.post<User>(
        'http://localhost:8000/login',
        authData,
      );

      // Если сервер вернул пустой ответ, то пробрасываем ошибку
      if (!response.data) {
        throw new Error();
      }

      // Не корректное использование. В редюсере не рекомендуется.
      // Записываем данные в localStorage, преобразуя объект в строку
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      // Передаем данные в стейт user
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      // Передаем сообщение с описание ошибки
      return thunkAPI.rejectWithValue('error');
    }
  },
);
