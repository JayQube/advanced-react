import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

// Функция принимает объект {paths} из файла webpack.config.ts
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  // Получаем только нужные элементы из объекта путём де структуризации
  const { mode, paths, isDev } = options;

  return {
    mode,
    // Entry - Стартовая точка приложения
    entry: paths.entry,
    output: {
      // filename - название главного файла сборки
      // [name] - будет заменено на имя входного файла (по умолчанию 'main')
      // [contenthash] - хэш содержимого файла (для кэширования)
      filename: '[name].[contenthash].js',
      // Название папки, куда будет сохранен файл.
      path: paths.build,
      // clean: true - автоматически очищает папку вывода перед новой сборкой
      clean: true,
    },
    // Пробрасываем объект {paths} из файла webpack.config.ts в функцию buildPlugins
    plugins: buildPlugins(options),
    module: {
      // Определяет, как обрабатывать разные типы файлов
      rules: buildLoaders(options),
    },
    // Расширения файлов для которых не нужно указывать расширение при импорте
    resolve: buildResolvers(options),
    // Для создания source map. Для отладки кода.
    devtool: isDev ? 'inline-source-map' : undefined,
    // Дев сервер для hot reload
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
