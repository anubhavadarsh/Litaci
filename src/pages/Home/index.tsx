import { FC } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import SplitSection from 'components/SplitSection';
import SocialsMenu from 'components/SocialsMenu';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <SocialsMenu classname={styles.socialMenu} />
        <Page className={styles.home}>
          <Banner main='hello'>
            I'm Anubhav Adarsh. Software Developer, Engineer and Product
            Designer.
          </Banner>
        </Page>
        <Page className={styles.home}>
          <Banner main='about' />
        </Page>
        <Page className={styles.home}>
          <SplitSection />
        </Page>
      </div>
    </>
  );
};

export default Home;
