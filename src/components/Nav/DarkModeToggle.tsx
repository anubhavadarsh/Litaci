import { FC, useContext } from 'react';
import clsx from 'clsx';

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
      <span
        className={clsx(
          'material-symbols-outlined',
          tCtx.dark && styles.__active
        )}>
        light_mode
      </span>
    </label>
  );
};

export default DarkModeToggle;
