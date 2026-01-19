import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  _isUserStateInited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Помещаем с стейт данные пользователя
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    // Для проверки того, что пользователь авторизован
    // Вызываем initAuthData в app.tsx в useEffect
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      // Если данные есть в localStorage, помещаем их в стейт
      if (user) {
        // JSON.parse() превращает строку в объект
        state.authData = JSON.parse(user);
      }
      // Подтверждаем, что стейт юзера инициализировался
      state._isUserStateInited = true;
    },
    // Очищаем стейт user и удаляем данные из localstorage
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

// Экспортируем для использования и задаем названия counterActions
// counterReducer
export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
