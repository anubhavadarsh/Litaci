import { FC, useContext } from 'react';
import clsx from 'clsx';
import { motion, useTime, useTransform } from 'framer-motion';

import { themeCtx } from 'context/theme-context';
import styles from './DarkModeToggle.module.scss';

interface props {
  className?: string;
}

const DarkModeToggle: FC<props> = ({ className: classProps }) => {
  const tCtx = useContext(themeCtx);

  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );

  return (
    <label className={clsx(styles.cont, classProps)}>
      <input
        type='checkbox'
        name='darkMode'
        id='darkMode'
        onChange={tCtx.toggleDark}
        checked={tCtx.dark}
      />
      <motion.span
        variants={variants}
        animate={tCtx.dark ? 'dark' : 'light'}
        transition={{
          duration: 0.5,
        }}
        style={{ rotate }}
        className={clsx('material-symbols-outlined')}>
        light_mode
      </motion.span>
    </label>
  );
};

const variants = {
  light: {
    y: '10px',
  },
  dark: {
    y: 0,
  },
};

export default DarkModeToggle;
