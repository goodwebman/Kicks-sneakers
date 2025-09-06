import { useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { darkTheme, lightTheme, ThemeContext } from '../../6_shared/theme';
import { ThemeNameEnum } from '../../6_shared/theme/types';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const currentThemeData: ThemeNameEnum = ThemeNameEnum.LIGHT;
  const [currentTheme, setCurrentTheme] =
    useState<ThemeNameEnum>(currentThemeData);
  const selectedTheme = useMemo(() => {
    switch (currentTheme) {
      case ThemeNameEnum.LIGHT:
        return lightTheme;
      case ThemeNameEnum.DARK:
        return darkTheme;
    }
  }, [currentTheme]);
  return (
    <ThemeContext.Provider
      value={{ theme: selectedTheme, selectTheme: setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
