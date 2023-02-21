import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import Nav from 'components/Nav';
import SocialsMenu from 'components/SocialsMenu';
import { ThemeProvider } from 'context/theme-context';
import store from 'store';

const Root: FC = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Nav />
          <SocialsMenu />
          <Outlet />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Root;
