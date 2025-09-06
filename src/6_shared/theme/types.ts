export enum ThemeNameEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeType = {
  name: ThemeNameEnum;
  styles: Record<string, string>;
};

export type ThemeContextType = {
  theme: ThemeType;
  selectTheme: (value: ThemeNameEnum) => void;
};
