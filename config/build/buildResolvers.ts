import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {

	return {
		// Расширения файлов для которых не нужно указывать расширение при импорте
		// (import component from './component')
		// Webpack будет пытаться найти файлы с указанными расширениями в указанном порядке
		extensions: ['.tsx', '.ts', '.js'],
	}
}
