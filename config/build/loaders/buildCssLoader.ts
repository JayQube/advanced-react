import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            // Определяет, какие файлы должны обрабатываться как CSS-модули.
            // В данном случае вернет true, если путь к файлу содержит .module.
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // Задаёт шаблон для генерации уникальных имён классов.
            localIdentName: isDev
              // Как вариант - src-components-Counter-module__btn-jfikmvnh
              ? '[path][name]__[local]--[hash:base64:8]'
              // Просто захэшированный класс
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}
