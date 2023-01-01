import { FC } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './Project.module.scss';
import { list } from './projectList';

interface IProps {
  bannerStyles: string;
  className?: string;
}

const Project: FC<IProps> = ({ className: classProps, bannerStyles }) => {
  const newClasses = clsx(classProps, styles.cont);

  return (
    <Page className={newClasses}>
      <Banner
        main='project'
        className={clsx(bannerStyles)}
      />
      <div className={styles.viewWrap}>
        <motion.div>
          {list.map((i, index) => (
            <PortArticle
              imgSrc={i.img}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </Page>
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
