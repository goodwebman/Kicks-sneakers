export enum ThemeNameEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextType = {
  theme: ThemeType;
  selectTheme: (value: ThemeNameEnum) => void;
};

export type ThemeType = {
  name: string;
  colors: {
    white: string;
    dark: string;
    grayscale: {
      primary: string;
      secondary: String;
    };
    blue: string;
    yellow: string;
  };
};
