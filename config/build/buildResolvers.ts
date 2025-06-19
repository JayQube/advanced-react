import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {

	return {
		// Расширения файлов для которых не нужно указывать расширение при импорте
		// (import component from './component')
		// Webpack будет пытаться найти файлы с указанными расширениями в указанном порядке
		extensions: ['.tsx', '.ts', '.js'],
		// Указывает Webpack отдавать предпочтение абсолютным путям при разрешении модулей
		preferAbsolute: true,
		// Определяет места, где Webpack будет искать модули
		modules: [options.paths.src, 'node_modules'],
		// Указывает, что при импорте директории(например, import './components') 
		// Webpack должен искать файл index с одним из расширений из extensions
		mainFiles: ['index'],
		// Может выглядеть как 
		// alias: {
		// '@': options.paths.src,
		// '@app': path.resolve(options.paths.src, 'app'),
		// '@pages': path.resolve(options.paths.src, 'pages'),
		// '@widgets': path.resolve(options.paths.src, 'widgets'),
		// '@features': path.resolve(options.paths.src, 'features'),
		// '@entities': path.resolve(options.paths.src, 'entities'),
		// '@shared': path.resolve(options.paths.src, 'shared'),
		// }
		alias: {}
	}
}
