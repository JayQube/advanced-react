import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Импортируем соседний компонент с версткой
  setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
