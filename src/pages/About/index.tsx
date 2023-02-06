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
        className={styles.banner}
      />
      <div className={styles.content}>
        <div className={styles.child}>
          <div className={styles.textContainer}>
            <p className={clsx(styles.text, styles.greet)}>
              I'm a web developer based in India with a passion for creating
              stunning, user-friendly websites. I love taking complex problems
              and turning them into simple, elegant solutions.
            </p>
            <p className={styles.text}>
              When I'm not coding, you can find me binge-watching shows on
              Netflix, or playing video games.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src='https://media.giphy.com/media/N3rfcp89yDb7zZJ6A5/giphy.gif'
              alt=''
            />
          </div>
        </div>
        <div className={styles.child}>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              I'm a firm believer in the power of a good cup of chai (or coffee,
              if that's your thing) to get the creative juices flowing.
            </p>
            <p className={styles.text}>
              I approach each project with a professional yet light-hearted
              attitude, because let's be real, coding can get a little boring
              without some humor.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src='https://media.giphy.com/media/cOSbH8NoUFt9MXbuie/giphy.gif'
              alt=''
            />
          </div>
        </div>
        <div className={styles.child}>
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
