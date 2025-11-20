import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (
  <Routes>
    {/* Это мы удаляем */}
    {/* <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} /> */}

    {/* Object.values(routeConfig) – возвращает массив
                значений объекта routeConfig.
                console.log(Object.values(routeConfig)) => Array [ {path, element}, {path, element} ]
                */}
    {Object.values(routeConfig).map(({ path, element }) => (
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

export default AppRouter;
