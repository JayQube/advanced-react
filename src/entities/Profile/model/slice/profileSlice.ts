import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      // В action.payload будет то значение, которое передали из вне
      state.readonly = action.payload;
    },
    // В state.form измененные данные. В state.data данные с сервера
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    // Этот редюсер отрабатывает, когда пользователь вводит что-то в инпуты
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  // pending => что происходит со стейтом пока идет запрос на сервер
  // fulfilled => что происходит, когда запрос выполнился успешно
  // rejected => что происходит если произошла ошибка
  extraReducers: (builder) => {
    builder
    // --------------- fetchProfileData --------------------- //
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // --------------- fetchProfileData --------------------- //
      // --------------- updateProfileData -------------------- //
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // --------------- updateProfileData -------------------- //
  },
});

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice;
