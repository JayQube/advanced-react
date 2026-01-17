import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
  // Узнаем авторизован ли пользователь
  const isAuth = useSelector(getUserAuthData);

  // Если маршрут помечен, как приватный и пользователь не авторизован, то
  // маршрут не отрисовывается
  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Routes>
      {/* Это мы удаляем */}
      {/* <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} /> */}

      {/* Object.values(routeConfig) – возвращает массив
                значений объекта routeConfig.
                console.log(Object.values(routeConfig)) => Array [ {path, element}, {path, element} ]
                */}
      {routes.map(({ path, element }) => (
      // Возвращаем компонент Route на каждой итерации функции map
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
};

export default memo(AppRouter);
