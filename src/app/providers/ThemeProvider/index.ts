// Импортируем, то что затем отдаем наружу
import ThemeProvider from './ui/ThemeProvider';
import { useTheme } from './lib/useTheme';
import { Theme } from './lib/ThemeContext';

// Отдаем наружу
export {
  ThemeProvider,
  useTheme,
  Theme,
};
