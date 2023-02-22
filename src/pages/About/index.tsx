import { useContext } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './About.module.scss';
import getIcon from 'utils/getIcon';
import { socialList } from 'components/SocialsMenu';
import { themeCtx } from 'context/theme-context';

const AboutPage = () => {
  const ctx = useContext(themeCtx);

  return (
    <Page className={styles.about}>
      <Cover
        name='about'
        isDark={ctx.dark}
      />
      <div className={styles.content}>
        <div className={styles.child}>
          <h2 className={clsx(styles.tag, styles.text)}>Background</h2>
          <div className={styles.textContainer}>
            <p className={clsx(styles.text, styles.greet)}>
              I'm a web developer based in India with a passion for creating
              stunning, user-friendly websites. I love taking complex problems
              and turning them into simple, elegant solutions.
            </p>
            <p className={styles.text}>
              When I'm not coding, you can find me binge-watching shows on
              Netflix, or playing video games.If you’d like to work on a project
              with me or just say hello, you can hit the contact section. Enjoy
              your stay.
            </p>
          </div>
        </div>
        <div className={styles.child}>
          <Contact />
        </div>
      </div>
    </Page>
  );
};

const Cover = ({ name, isDark }: { name: string; isDark: boolean }) => {
  return (
    <div className={styles.cover}>
      <div className={clsx(styles.background, isDark && styles.dark)} />
      <div className={clsx(styles.backdrop, styles.gradient)} />
      <Banner
        main={name}
        className={styles.banner}
      />
    </div>
  );
};

const Contact = () => {
  return (
    <div className={styles.layer}>
      <h2 id='contact'>contact</h2>
      <p>
        <span>Drop by, say hi at</span>{' '}
        <a href='mailto:anubhav.adarsh9@gmail.com?subject=Hi, would love to catch up!'>
          anubhav.adarsh9@gmail.com
        </a>
      </p>
      <div>
        <Links />
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <>
      {socialList.map(({ handle, link, name }) => {
        return (
          <span
            className={styles.link}
            key={name}>
            <a href={`${link}${handle}`}>{getIcon(name)}</a>
          </span>
        );
      })}
    </>
  );
};

export default AboutPage;
