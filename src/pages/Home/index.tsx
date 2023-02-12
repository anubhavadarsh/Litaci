import { FC, useLayoutEffect, useState, useRef, useContext } from 'react';
import { themeCtx } from 'context/theme-context';
import clsx from 'clsx';

import Page from 'containers/Page';
import ProjectPage from 'pages/Project';
import WorkPage from 'pages/Work';
import styles from './Home.module.scss';
import heroImageDark from 'assets/img/hero-dark.jpg';

const Home: FC = () => {
  const [fontSize, setFontSize] = useState(16);
  const heroRef = useRef<HTMLDivElement>(null);

  const ctx = useContext(themeCtx);

  useLayoutEffect(() => {
    const handleResize = (e: UIEvent | null) => {
      console.log(window.innerWidth);

      if (window.innerWidth < 768) {
        setFontSize(58);
        return;
      }

      if (window.innerWidth < 1024) {
        setFontSize(112);
        return;
      }

      if (window.innerWidth < 1280) {
        setFontSize(152);
        return;
      }

      const children = heroRef.current?.children;
      if (children) {
        const height = children[0].clientHeight;

        setFontSize(height <= 187 ? height : 187);
      }
    };

    handleResize(null);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayP = (text: string) => {
    return (
      <p
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: `${fontSize}px`,
        }}>
        {text}
      </p>
    );
  };

  return (
    <Page className={styles.wrapper}>
      <Page className={clsx(styles.home, styles.salute)}>
        <section
          className={styles.hero}
          style={{
            backgroundImage: !ctx.dark ? `url(${heroImageDark})` : undefined,
          }}
          ref={heroRef}>
          <div className={styles.hero__content}>{displayP('Anubhav')}</div>
          <div className={styles.hero__content}>{displayP('Adarsh')}</div>
          <div className={styles.hero__content}>{displayP('Software')}</div>
          <div className={styles.hero__content}>{displayP('Developer')}</div>
        </section>
      </Page>
      <ProjectPage className={styles.home} />
      <WorkPage className={styles.home} />
    </Page>
  );
};

export default Home;
