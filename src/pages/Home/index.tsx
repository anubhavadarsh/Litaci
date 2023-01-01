import { FC } from 'react';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import ProjectPage from 'pages/Project';
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
        <ProjectPage
          bannerStyles={styles.banner}
          className={styles.home}
        />
        <Page className={styles.home}>
          <SplitSection />
        </Page>
      </div>
    </>
  );
};

export default Home;
