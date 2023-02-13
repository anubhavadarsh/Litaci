import { FC } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import ProjectPage from 'pages/Project';
import WorkPage from 'pages/Work';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Page className={styles.wrapper}>
      <LandingPage />
      <ProjectPage className={styles.home} />
      <WorkPage className={styles.home} />
    </Page>
  );
};

const LandingPage: FC = () => {
  return (
    <Page className={clsx(styles.home)}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <h2>Software</h2>
          <h2>Developer</h2>
        </div>
      </div>
    </Page>
  );
};

export default Home;
