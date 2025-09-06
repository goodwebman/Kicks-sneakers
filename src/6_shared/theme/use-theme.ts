import { useContext } from 'react';
import { ThemeContext } from './context';
import type { ThemeContextType } from './types';

export function useTheme() {
  return useContext<ThemeContextType>(ThemeContext);
}
