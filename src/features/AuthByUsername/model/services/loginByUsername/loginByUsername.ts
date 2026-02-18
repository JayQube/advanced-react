import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
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
ThunkConfig<string>
>(
  // Префикс для автоматически генерируемых типов экшенов:
  // users/fetchById/pending
  // users/fetchById/fulfilled
  // users/fetchById/rejected
  'login/loginByUsername',
  // authData - объект с полями username и password
  // thunkAPI - объект с методами Redux (dispatch, getState, и т.д.)
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
      // Ожидаем что сервер вернет нам объект User
      const response = await extra.api.post<User>('/login', authData);

      // Если сервер вернул пустой ответ, то пробрасываем ошибку
      if (!response.data) {
        throw new Error();
      }

      // Не корректное использование. В редюсере не рекомендуется.
      // Записываем данные в localStorage, преобразуя объект в строку
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      // Передаем данные в стейт user
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      // Передаем сообщение с описание ошибки
      return rejectWithValue('error');
    }
  },
);
