import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

// Функция принимает объект {paths} из файла buildWebpackConfig.ts, который был передан из файла webpack.config.ts
export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    // Создаёт HTML-файл (обычно index.html) в папке сборки
    // Автоматически добавляет в него скрипты
    // template - использует указанный HTML-файл как шаблон
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    // Показывает прогресс сборки в консоли
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // css - название поддиректории в папке build
      // [name] - это плейсхолдер, который заменяется на имя entry point (по умолчанию main)
      // [contenthash:8] - хэш, основанный на содержимом файла:
      // contenthash генерируется из содержимого CSS-файла
      // :8 означает, что будет использоваться только первые 8 символов хэша
      // Хэш меняется только при изменении содержимого файла, что полезно для долгосрочного кэширования
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // Позволяет прокидывать глобальные переменные через все приложение
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    // Позволяет применять изменения без перезагрузки страницы
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      // Команда не открывает страницу с анализом автоматически
      // Ссылка на страницу будет в терминале
      openAnalyzer: false,
    }));
  }

  return plugins;
}
