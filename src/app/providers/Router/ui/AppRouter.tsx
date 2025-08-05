import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('Loading')}</div>}>
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
              <Suspense fallback={<div>{t('Loading')}</div>}>
                <div className="page-wrapper">
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
