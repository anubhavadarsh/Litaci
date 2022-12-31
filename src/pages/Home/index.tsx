import { FC } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import SplitSection from 'components/SplitSection';
import SocialsMenu from 'components/SocialsMenu';
import Nav from 'components/Nav';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Nav className={styles.nav} />
        <SocialsMenu classname={styles.socialMenu} />
        <Page className={styles.home}>
          <Banner
            main='hello'
            className={styles.banner}>
            I'm Anubhav Adarsh. Software Developer, Engineer and Product
            Designer.
          </Banner>
        </Page>
        <Page className={clsx(styles.home, styles.project)}>
          <Banner
            main='project'
            className={styles.banner}
          />
        </Page>
        <Page className={styles.home}>
          <SplitSection />
        </Page>
      </div>
    </>
  );
};

export default Home;
