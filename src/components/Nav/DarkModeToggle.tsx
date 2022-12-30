import { FC, useContext } from 'react';

import { themeCtx } from 'context/theme-context';
import styles from './DarkModeToggle.module.scss';

const DarkModeToggle: FC = () => {
  const tCtx = useContext(themeCtx);

  return (
    <div className={styles.DMToggle}>
      <input
        type='checkbox'
        name='darkMode'
        id='darkMode'
        onChange={tCtx.toggleDark}
        checked={tCtx.dark}
      />
      <label htmlFor='darkMode'>
        <span className={styles.btn}>{tCtx.dark ? '🌑' : '☀️'}</span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
