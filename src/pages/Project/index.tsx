import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import clsx from 'clsx';

import Page from 'containers/Page';
import styles from './Project.module.scss';
import Banner from 'containers/Banner';
import { IRepoResponse } from 'services/api/Repos';
import { themeCtx } from 'context/theme-context';

const Project = () => {
  const data = useLoaderData() as IRepoResponse;
  const ctx = useContext(themeCtx);

  return (
    <Page className={styles.page}>
      <Cover
        name={data.name}
        isDark={ctx.dark}
      />
      <div className={styles.content}>
        <div className={styles.child}>{}</div>
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
        className={styles.banner}
        main={name}
      />
    </div>
  );
};

export default Project;
