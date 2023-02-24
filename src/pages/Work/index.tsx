import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import SplitSection from 'components/SplitSection';
import { IPageProps } from 'pages/Project/Landing';
import styles from './Work.module.scss';
import Banner from 'containers/Banner';
import { ReactComponent as Arrow } from 'assets/icons/arrow-2.svg';

const companies = [
  {
    name: 'Bright Money',
    color: {
      bg: '#16c75dea',
      ac: '#fdfdfd',
    },
    src: '',
  },
  {
    name: 'Merakii',
    color: {
      bg: '#f6971bea',
      ac: '#fdfdfd',
    },
    src: '',
  },
  {
    name: 'Neon Sundae',
    color: {
      bg: '#1f1e23ea',
      ac: '#e16cfc',
    },
    src: '',
  },
  {
    name: 'Innovatyv',
    color: {
      bg: '#fdfdfdea',
      ac: '#4d79be',
    },
    src: '',
  },
];

const Work = ({ bannerStyles, className: classProps }: IPageProps) => {
  const [hover, setHover] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const listen = () => {
      if (window.innerWidth < 768) return setIsMobile(true);
      else {
        setIsMobile(false);
      }
    };

    listen();

    window.addEventListener('resize', listen);

    return () => window.removeEventListener('resize', listen);
  }, []);

  const handleMouseEnter = (el: string) => () => {
    setHover(el);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <>
      <Page className={clsx(classProps, styles.page)}>
        <Banner
          main='work'
          className={styles.banner}
        />
        <div className={styles.cue}>
          <span>Scroll</span>
          <Arrow
            height={80}
            width={80}
          />
        </div>
      </Page>
      <div className={styles.gallery}>
        {companies.map((c) => (
          <section key={c.name}>
            <article
              onMouseEnter={handleMouseEnter(c.name)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hover == c.name || isMobile ? c.color.ac : undefined,
                backgroundColor:
                  hover == c.name || isMobile ? c.color.bg : undefined,
              }}
              className={clsx(hover == c.name && styles.bg)}>
              <h3>{c.name}</h3>
            </article>
          </section>
        ))}
      </div>
    </>
  );
};

export default Work;
