import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // Так как имеет значение в каком порядке лоадеры возвращаются в массиве, то лоадеры мы выносим
  // в переменные

  // Устанавливаем пакет через npm - npm i @svgr/webpack --save-dev
  const svgLoader = {
    // Регулярка для поиска svg файлов
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        // Настройки для babel-plugin-i18next-extract
        // plugins: [
        //     [
        //         'i18next-extract',
        //         {
        //             locales: ['ru', 'en'],
        //             keyAsDefaultValue: true,
        //         },
        //     ],
        // ],
      },
    },
  };

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/, // Регулярное выражение для поиска файлов, которые нужно пропустить через лоадер
    use: 'ts-loader', // Название лоадера
    exclude: /node_modules/, // Исключает папку node_modules из обработки
  };

  // Устанавливаем пакет через npm - npm i file-loader --save-dev
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  // Список лоадеров
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
