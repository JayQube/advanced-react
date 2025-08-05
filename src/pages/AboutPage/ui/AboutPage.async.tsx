import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Импортируем соседний компонент с версткой
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
