import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

// AppRouteProps расширяет пропсы RouteProps
export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

// Имена маршрутов
export enum AppRoutes {
  MAIN = 'main', // eslint-disable-line no-unused-vars
  ABOUT = 'about', // eslint-disable-line no-unused-vars
  PROFILE = 'profile', // eslint-disable-line no-unused-vars
  ARTICLES = 'articles', // eslint-disable-line no-unused-vars
  ARTICLE_DETAILS = 'article_details', // eslint-disable-line no-unused-vars
  ARTICLE_CREATE = 'article_create', // eslint-disable-line no-unused-vars
  ARTICLE_EDIT = 'article_edit', // eslint-disable-line no-unused-vars

  // last
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
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  // last
  [AppRoutes.NOT_FOUND]: '*',
};

// Это основной объект конфигурации маршрутов. Для каждого маршрута
// он определяет:
// path - URL-путь (берется из RoutePath)
// element - React-компонент, который будет отрисован
// при переходе по этому пути
// authOnly - флаг для защищенных маршрутов
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath[AppRoutes.ARTICLE_CREATE]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath[AppRoutes.ARTICLE_EDIT]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
