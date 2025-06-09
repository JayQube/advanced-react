import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // Так как имеет значение в каком порядке лоадеры возвращаются в массиве, то лоадеры мы выносим
    // в переменные

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
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
                }
            },
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/, // Регулярное выражение для поиска файлов, которые нужно пропустить через лоадер
        use: 'ts-loader', // Название лоадера
        exclude: /node_modules/, // Исключает папку node_modules из обработки
    }

    // Список лоадеров
    return [
        typescriptLoader,
        cssLoader
    ]
}
