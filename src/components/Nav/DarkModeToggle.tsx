import { FC, useContext } from 'react';
import clsx from 'clsx';
import {
  AnimatePresence,
  motion,
  useTime,
  useTransform,
  Variants,
} from 'framer-motion';

import { themeCtx } from 'context/theme-context';
import styles from './DarkModeToggle.module.scss';

interface props {
  className?: string;
}

const DarkModeToggle: FC<props> = ({ className: classProps }) => {
  const tCtx = useContext(themeCtx);

  return (
    <label className={clsx(styles.cont, classProps)}>
      <input
        type='checkbox'
        name='darkMode'
        id='darkMode'
        onChange={tCtx.toggleDark}
        checked={tCtx.dark}
      />
      <AnimatePresence>
        {tCtx.dark && (
          <motion.span
            className={clsx('material-symbols-outlined', styles.cloud)}
            initial={{ x: '100%' }}
            animate={{ x: 5 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}>
            cloud
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span
        variants={variants}
        animate={tCtx.dark ? 'dark' : 'light'}
        transition={{
          duration: 0.5,
        }}
        className={clsx('material-symbols-outlined')}>
        light_mode
      </motion.span>
    </label>
  );
};

const variants: Variants = {
  dark: {
    y: '5px',
  },
  light: {
    y: 0,
    rotate: '-45deg',
  },
};

export default DarkModeToggle;
