import { createContext } from 'react';

export enum Theme {
    LIGHT = 'app_light_theme', // eslint-disable-line no-unused-vars
    DARK = 'app_dark_theme', // eslint-disable-line no-unused-vars
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (_theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
