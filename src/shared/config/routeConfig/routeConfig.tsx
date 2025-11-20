import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

// Имена маршрутов
export enum AppRoutes {
  MAIN = 'main', // eslint-disable-line no-unused-vars
  ABOUT = 'about', // eslint-disable-line no-unused-vars
  NOT_FOUND = 'not_found' // eslint-disable-line no-unused-vars
}

// Объект, который связывает каждый маршрут из enum с соответствующим
// URL-путем.
// Тип Record в TypeScript - это утилитный тип, который
// позволяет создавать объектные типы с заданными типами
// для ключей и значений.
// Конструкция с квадратными скобками в объекте называется
// "вычисляемые свойства" (Computed Property Names)
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  // ^ Вычисляемое свойство:
  // Берется значение AppRoutes.MAIN ('main') и используется как ключ
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/*',
};

// Это основной объект конфигурации маршрутов. Для каждого маршрута
// он определяет:
// path - URL-путь (берется из RoutePath)
// element - React-компонент, который будет отрисован
// при переходе по этому пути
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,

  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
