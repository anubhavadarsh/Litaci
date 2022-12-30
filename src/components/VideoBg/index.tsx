import { FC, ReactNode } from 'react';

import Page from 'containers/Page';
import styles from './VideoBg.module.scss';
import source from 'assets/video/tmlapse_sky.mp4';

const VideoBg: FC = () => {
  return (
    <Page className={styles.VideoBg}>
      <video
        src={source}
        loop
        autoPlay
        muted></video>
      {/* <div className={styles.gradient}></div> */}
    </Page>
  );
};

export default VideoBg;
