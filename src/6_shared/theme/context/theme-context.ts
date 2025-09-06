import { createContext } from 'react';
import { ThemeNameEnum, type ThemeContextType } from '../types';
import { lightTheme } from '../index';

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  selectTheme: (_value: ThemeNameEnum) => {},
});
