import webpack from 'webpack';

import path from 'path'; // Плагин для автоматического создания HTML-файлов и подключения в них скриптов
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  // Все пути приложения в одном месте, которые
  // передаются в функцию buildWebpackConfig
  // path.resolve() — метод, который преобразует последовательность путей в абсолютный путь.
  // __dirname — это глобальная переменная в Node.js, которая содержит абсолютный путь к директории текущего исполняемого файла.
  // Последующие строки это - путь до стартовой точки без '/'
  const paths: BuildPaths = {
    // Точка входа
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    // Точка выхода
    build: path.resolve(__dirname, 'build'),
    // Путь к файлу index.html
    html: path.resolve(__dirname, 'public', 'index.html'),
    // Путь к папке src
    src: path.resolve(__dirname, 'src'),
    // Путь к папке с локализацией
    locales: path.resolve(__dirname, 'public', 'locales'),
    // Путь к папке с локализацией в билде
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
    // Путь к папке с изображениями
    images: path.resolve(__dirname, 'public', 'images'),
    // Путь к папке с изображениями в билде
    buildImages: path.resolve(__dirname, 'build', 'images'),
  };

  const mode: BuildMode = env.mode || 'development';
  const PORT: number = env.port || 3000;
  // Url для api запросов берется либо из env файла, либо задается локальным
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const isDev: boolean = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });
  return config;
};
