import darkThemeStyles from './themes/dark-theme.module.scss';
import lightThemeStyles from './themes/light-theme.module.scss';
import { ThemeNameEnum, type ThemeType } from './types';

export const lightTheme: ThemeType = {
  name: ThemeNameEnum.LIGHT,
  styles: lightThemeStyles,
};

export const darkTheme: ThemeType = {
  name: ThemeNameEnum.DARK,
  styles: darkThemeStyles,
};
