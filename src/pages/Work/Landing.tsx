import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import Page from 'containers/Page';
import { IPageProps } from 'pages/Project/Landing';
import styles from './Work.module.scss';
import Banner from 'containers/Banner';
import { ReactComponent as Arrow } from 'assets/icons/arrow-2.svg';
import { repo as repoAPI } from 'services/api/repo';
import { useGetCompanies } from './hook';
import { themeCtx } from 'context/theme-context';

// const companies = [
//   {
//     name: 'Bright Money',
//     color: {
//       bg: '#16c75dea',
//       ac: '#fdfdfd',
//     },
//     src: '',
//   },
//   {
//     name: 'Merakii',
//     color: {
//       bg: '#f6971bea',
//       ac: '#fdfdfd',
//     },
//     src: '',
//   },
//   {
//     name: 'Neon Sundae',
//     color: {
//       bg: '#1f1e23ea',
//       ac: '#e16cfc',
//     },
//     src: '',
//   },
//   {
//     name: 'Innovatyv',
//     color: {
//       bg: '#fdfdfdea',
//       ac: '#4d79be',
//     },
//     src: '',
//   },
// ];
// const companies2 = [
//   {
//     name: 'Bright Money',
//     color: {
//       bg: '#1f1e23ea',
//       ac: '#16c75d',
//     },
//     src: '',
//   },
//   {
//     name: 'Merakii',
//     color: {
//       bg: '#1f1e23ea',
//       ac: '#f6971b',
//     },
//     src: '',
//   },
//   {
//     name: 'Neon Sundae',
//     color: {
//       bg: '#1f1e23ea',
//       ac: '#e16cfc',
//     },
//     src: '',
//   },
//   {
//     name: 'Innovatyv',
//     color: {
//       bg: '#1f1e23ea',
//       ac: '#4d79be',
//     },
//     src: '',
//   },
// ];

const Landing = ({
  className: classProps,
}: Omit<IPageProps, 'bannerStyles'>) => {
  const [hover, setHover] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navigate = useNavigate();

  //TODO: need to move this to redux, as going back to home page makes a call again!
  const { companies, makeRequest } = useGetCompanies();
  const ctx = useContext(themeCtx);

  useEffect(() => {
    const listen = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else {
        setIsMobile(false);
      }
    };

    listen();

    window.addEventListener('resize', listen);

    return () => window.removeEventListener('resize', listen);
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    makeRequest({ ac }, repoAPI.getRepoContent);

    return () => ac.abort();
  }, []);

  const handleMouseEnter = (el: string) => () => {
    setHover(el);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (name: string) => () => {
    navigate(`/work/${name}`);
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
              onClick={handleClick(c.name)}
              onMouseEnter={handleMouseEnter(c.name)}
              onMouseLeave={handleMouseLeave}
              className={clsx(
                (hover == c.name || isMobile) && styles.bg,
                ctx.dark && styles.dark
              )}>
              <h3>{c.name.replace('-', ' ')}</h3>
            </article>
          </section>
        ))}
      </div>
    </>
  );
};

export default Landing;
