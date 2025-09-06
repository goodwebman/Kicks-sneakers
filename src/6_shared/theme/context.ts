import { createContext } from 'react';
import { lightTheme } from './themes';
import type { ThemeContextType } from './types';

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  selectTheme: () => {},
});
