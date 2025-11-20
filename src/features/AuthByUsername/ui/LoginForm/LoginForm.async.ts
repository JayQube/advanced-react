import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Импортируем соседний компонент с версткой
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
