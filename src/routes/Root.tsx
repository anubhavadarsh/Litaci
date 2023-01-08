import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from 'components/Nav';
import SocialsMenu from 'components/SocialsMenu';
import { ThemeProvider } from 'context/theme-context';

const Root: FC = () => {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <SocialsMenu />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Root;
