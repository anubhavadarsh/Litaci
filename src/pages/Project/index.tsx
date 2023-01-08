import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
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
    <motion.article
      className={styles.projectArticle}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}>
      <motion.div
        className={styles.imgCont}
        variants={portVariants}>
        <img
          src={imgSrc}
          alt='test'
        />
      </motion.div>
    </motion.article>
  );
};

const portVariants: Variants = {
  offscreen: {
    y: '100%',
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};

export default Project;
