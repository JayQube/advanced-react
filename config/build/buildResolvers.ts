import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {

	return {
		// Расширения файлов для которых не нужно указывать расширение при импорте
		// (import component from './component')
		// Webpack будет пытаться найти файлы с указанными расширениями в указанном порядке
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	}
}
