import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  // То что возвращает запрос
  Profile,
  // То что мы передаем
  void,
  // В случае ошибки вернет rejectValue
  ThunkConfig<string>
>(
  // Префикс для автоматически генерируемых типов экшенов:
  // users/fetchById/pending
  // users/fetchById/fulfilled
  // users/fetchById/rejected
  'profile/fetchProfileData',
  // authData - объект с полями username и password
  // thunkAPI - объект с методами Redux (dispatch, getState, и т.д.)
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      // Ожидаем что сервер вернет нам объект User
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (e) {
      console.log(e);
      // Передаем сообщение с описание ошибки
      return rejectWithValue('error');
    }
  },
);
