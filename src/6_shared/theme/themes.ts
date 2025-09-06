import { colors } from '../styles';
import { ThemeNameEnum, type ThemeType } from './types';

export const lightTheme: ThemeType = {
  name: ThemeNameEnum.LIGHT,
  colors: {
    dark: colors.dark,
    white: colors.white,
    grayscale: {
      primary: colors.grayscale.primary,
      secondary: colors.grayscale.secondary,
    },
    blue: colors.blue,
    yellow: colors.yellow,
  },
};

export const darkTheme: ThemeType = {
  name: ThemeNameEnum.DARK,
  colors: {
    dark: colors.dark,
    white: colors.white,
    grayscale: {
      primary: colors.grayscale.primary,
      secondary: colors.grayscale.secondary,
    },
    blue: colors.blue,
    yellow: colors.yellow,
  },
};
