import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Импортируем соседний компонент с версткой
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
