import { FC } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './About.module.scss';

const AboutPage: FC = () => {
  return (
    <Page className={styles.about}>
      <Banner
        main='About'
        className={clsx(styles.banner, styles.bannerBottom)}
      />
      <div className={styles.content}>
        <div className={clsx(styles.card, styles.left)}></div>
        <div
          className={styles.card}
          style={{ left: '60%', height: '40%', top: '50%' }}></div>
        <div
          className={styles.card}
          style={{ left: '60%', height: '40%', top: '150%' }}></div>
      </div>
      <Banner
        main='About'
        className={clsx(styles.banner, styles.bannerTop)}
      />
    </Page>
  );
};

export default AboutPage;
