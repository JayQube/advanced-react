import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

// Получаем весь объект scroll из ui
export const getUIScroll = (state: StateSchema) => state.ui.scroll;

// Получаем позицию скролла для конкретного пути
export const getUIScrollByPath = createSelector(
  // Получаем весь объект scroll из ui
  getUIScroll,
  // Получаем путь из аргументов селектора
  (state: StateSchema, path: string) => path,
  // Возвращаем позицию скролла для конкретного пути, если ее нет - возвращаем 0
  (scroll, path) => scroll[path] || 0,
);
