import { useContext } from 'react';

import type { ThemeContextType } from '../types';
import { ThemeContext } from './theme-context';

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
