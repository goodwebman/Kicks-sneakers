import { useEffect, useMemo, useState, type FC, type PropsWithChildren, useCallback } from 'react';
import { ThemeNameEnum, type ThemeType } from '../../../6_shared/theme/types';
import { darkTheme, lightTheme } from '../../../6_shared/theme';
import { ThemeContext } from '../../../6_shared/theme/context/theme-context';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeNameEnum>(() => {
    const saved = localStorage.getItem('theme') as ThemeNameEnum | null;
    if (saved === ThemeNameEnum.DARK || saved === ThemeNameEnum.LIGHT) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? ThemeNameEnum.DARK : ThemeNameEnum.LIGHT;
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const selectedTheme: ThemeType = useMemo(() => {
    return currentTheme === ThemeNameEnum.DARK ? darkTheme : lightTheme;
  }, [currentTheme]);

  const toggleTheme = useCallback(() => {
    setCurrentTheme(prev =>
      prev === ThemeNameEnum.LIGHT ? ThemeNameEnum.DARK : ThemeNameEnum.LIGHT
    );
  }, []);


  const contextValue = useMemo(
    () => ({
      theme: selectedTheme,
      selectTheme: setCurrentTheme,
      toggleTheme,
      currentTheme,
    }),
    [selectedTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
