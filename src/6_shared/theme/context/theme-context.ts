import { createContext } from 'react';
import { lightTheme } from '../index';
import { ThemeNameEnum } from '../types';

export const ThemeContext = createContext({
  theme: lightTheme,
  currentTheme: ThemeNameEnum.LIGHT,
  selectTheme: (_value: ThemeNameEnum) => {},
  toggleTheme: () => {},
});
