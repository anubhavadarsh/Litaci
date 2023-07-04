import { useContext } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import Page from 'containers/Page';
import ProjectLanding from 'pages/Project/Landing';
import WorkLanding from 'pages/Work/Landing';
import styles from './Home.module.scss';
import { themeCtx } from 'context/theme-context';

const Home = () => {
  return (
    <Page className={styles.wrapper}>
      <Landing />
      <ProjectLanding className={styles.display} />
      <WorkLanding className={styles.display} />
    </Page>
  );
};

const Landing = () => {
  const ctx = useContext(themeCtx);

  return (
    <Page className={styles.home}>
      <div className={clsx(styles.cover, !ctx.dark && styles.bgDark)}>
        <AnimatedWord text='software developer' />
      </div>
    </Page>
  );
};

const variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const AnimatedWord = ({ text }: { text: string }) => {
  const words = text.split(' ');

  return (
    <motion.div className={styles.content}>
      {words.map((w, index) => (
        <h2 key={index}>{w}</h2>
      ))}
    </motion.div>
  );
};

export default Home;
