import React, { FC, ReactNode, useEffect, useState } from 'react';

import { IThemeContext } from 'types/theme';

const initialState = {
  dark: true,
};

const themeCtx = React.createContext<IThemeContext>(initialState);

interface props {
  children: ReactNode;
}

const ThemeProvider: FC<props> = ({ children }) => {
  const [isDark, setIsDark] = useState(initialState.dark);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <themeCtx.Provider value={{ dark: isDark, toggleDark: handleToggle }}>
      {children}
    </themeCtx.Provider>
  );
};

export { themeCtx, ThemeProvider };
