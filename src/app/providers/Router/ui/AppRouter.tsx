import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    console.log(routeConfig);
    console.log(Object.values(routeConfig));
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                            <Suspense fallback={<div>Loading...</div>}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;