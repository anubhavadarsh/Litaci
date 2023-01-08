import { FC } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import ProjectPage from 'pages/Project';
import WorkPage from 'pages/Work';
import SocialsMenu from 'components/SocialsMenu';
import Nav from 'components/Nav';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Page className={styles.wrapper}>
      <Nav className={styles.nav} />
      <SocialsMenu classname={styles.socialMenu} />
      <Page className={clsx(styles.home, styles.salute)}>
        <Banner main='hello'>
          I'm Anubhav Adarsh. Software Developer, Engineer and Product Designer.
        </Banner>
      </Page>
      <ProjectPage className={styles.home} />
      <WorkPage className={styles.home} />
    </Page>
  );
};

export default Home;
