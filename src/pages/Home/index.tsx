import { useContext } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import ProjectLanding from 'pages/Project/Landing';
import WorkLanding from 'pages/Work/Landing';
import styles from './Home.module.scss';
import { themeCtx } from 'context/theme-context';

const Home = () => {
  return (
    <Page className={styles.wrapper}>
      <Landing />
      <ProjectLanding className={styles.display} />
      <WorkLanding className={styles.display} />
    </Page>
  );
};

const Landing = () => {
  const ctx = useContext(themeCtx);

  return (
    <Page className={styles.home}>
      <div className={clsx(styles.cover, !ctx.dark && styles.bgDark)}>
        <div className={styles.content}>
          <h2>Software</h2>
          <h2>Developer</h2>
        </div>
      </div>
    </Page>
  );
};

export default Home;
