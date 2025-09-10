import { useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { ThemeNameEnum } from '../../../6_shared/theme/types'
import { darkTheme, lightTheme } from '../../../6_shared/theme'
import { ThemeContext } from '../../../6_shared/theme/context/theme-context'


export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeNameEnum>(
    ThemeNameEnum.LIGHT,
  );

  const selectedTheme = useMemo(() => {
    switch (currentTheme) {
      case ThemeNameEnum.LIGHT:
        return lightTheme;
      case ThemeNameEnum.DARK:
        return darkTheme;
    }
  }, [currentTheme]);

  useMemo(() => {
    document.body.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme: selectedTheme, selectTheme: setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
