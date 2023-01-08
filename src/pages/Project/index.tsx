import { FC } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './Project.module.scss';
import { list } from './projectList';

export interface IPageProps {
  bannerStyles?: string;
  className?: string;
}

const Project: FC<IPageProps> = ({ className: classProps, bannerStyles }) => {
  const newClasses = clsx(classProps, styles.cont);

  return (
    <>
      <Page className={newClasses}>
        <Banner
          main='project'
          className={clsx(bannerStyles)}
        />
      </Page>
      <div className={styles.viewWrap}>
        <div>
          {list.map((i, index) => (
            <PortArticle
              imgSrc={i.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

interface IPAProps {
  imgSrc: string;
}

const PortArticle: FC<IPAProps> = ({ imgSrc }) => {
  return (
    <article className={styles.projectArticle}>
      <div className={styles.projItem}>
        <div className={styles.imgCont}>
          <img
            src={imgSrc}
            alt='test'
          />
        </div>
      </div>
    </article>
  );
};

export default Project;
