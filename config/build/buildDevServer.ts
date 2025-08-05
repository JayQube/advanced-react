import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // Автоматически открывает страницу с приложением в браузере
    open: true,
    historyApiFallback: true,
    // Позволяет применять изменения без перезагрузки страницы
    hot: true,
  };
}
