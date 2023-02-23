import { useRouteError } from 'react-router-dom';
import clsx from 'clsx';

import { ThemeProvider } from 'context/theme-context';
import Nav from 'components/Nav';
import SocialsMenu from 'components/SocialsMenu';
import Banner from 'containers/Banner';
import Page from 'containers/Page';
import styles from './Error.module.scss';

//TODO: fix the error page to handle various errors
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <ThemeProvider>
      <Nav />
      <SocialsMenu />
      <Page
        className={styles.page}
        id='error-page'>
        <div className={styles.cover}>
          <div className={styles.background} />
          <div className={clsx(styles.backdrop, styles.gradient)} />
          <Banner
            className={styles.banner}
            main={error.status}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.child}>{}</div>
        </div>
      </Page>
    </ThemeProvider>
  );
};

export default ErrorPage;
