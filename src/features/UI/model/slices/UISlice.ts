import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
  scroll: {},
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      // path - адрес страницы, position - позиция скролла
      { payload }: PayloadAction<{path: string; position: number}>,
    ) => {
      // Сохраняем позицию скролла для конкретного пути
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const {
  actions: uiActions,
  reducer: uiReducer,
} = uiSlice;
