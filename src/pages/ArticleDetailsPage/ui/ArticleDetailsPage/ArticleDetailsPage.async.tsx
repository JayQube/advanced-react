import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Импортируем соседний компонент с версткой
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
