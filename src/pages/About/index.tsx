import { FC } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './About.module.scss';
import getIcon from 'utils/getIcon';

const AboutPage: FC = () => {
  return (
    <Page className={styles.about}>
      <Banner
        main='About'
        className={clsx(styles.banner, styles.bannerBottom)}
      />
      <div className={styles.content}>
        <div className={clsx(styles.card, styles.first)}>
          <img
            src='https://media.giphy.com/media/jQEg497ODi2J8nggZI/giphy.gif'
            alt=''
          />
        </div>
        <div className={styles['first-text']}>
          <p>
            I'm a web developer based in India with a passion for creating
            stunning, user-friendly websites. I love taking complex problems and
            turning them into simple, elegant solutions.
          </p>
          <p>
            When I'm not coding, you can find me binge-watching shows on
            Netflix, or playing video games.
          </p>
        </div>
        <div className={clsx(styles.card, styles.second)}>
          <img
            src='https://media.giphy.com/media/2w5gnM5izNAw8FFcXx/giphy.gif'
            alt=''
          />
        </div>
        <div className={styles['second-text']}>
          <p>
            I'm a firm believer in the power of a good cup of chai (or coffee,
            if that's your thing) to get the creative juices flowing. Whether
            I'm working on a new project or debugging a stubborn line of code, I
            approach each challenge with enthusiasm and a can-do attitude.
          </p>
        </div>
        {/* <div>
          <p>
            If you're looking for a web developer who's passionate,
            knowledgeable, and always up for a good laugh, look no further!
            <br />
            Let's work together to bring your next project to life or just say
            hello. Enjoy your stay.
          </p>
        </div> */}
        <div className={styles['layer-parent']}>
          <div className={styles.layer}>
            <h2>contact</h2>
            <p>
              <span>Drop by, say hi at</span> <a>anubhav.adarsh9@gmail.com</a>
            </p>
            <div>
              <Links />
            </div>
          </div>
        </div>
      </div>
      <Banner
        main='About'
        className={clsx(styles.banner, styles.bannerTop)}
      />
    </Page>
  );
};

const Links: FC = () => {
  const twitter = getIcon('twitter');
  const medium = getIcon('medium');
  const github = getIcon('github');
  const linkedin = getIcon('linkedin');

  return (
    <>
      <span className={clsx(styles.link, styles.twitter)}>{twitter}</span>
      <span className={clsx(styles.link, styles.medium)}>{medium}</span>
      <span className={clsx(styles.link, styles.medium)}>{github}</span>
      <span className={clsx(styles.link, styles.linkedin)}>{linkedin}</span>
    </>
  );
};

export default AboutPage;
