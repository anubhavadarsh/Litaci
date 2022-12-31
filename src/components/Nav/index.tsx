import clsx from 'clsx';
import { FC } from 'react';
import DarkModeToggle from './DarkModeToggle';

import styles from './Nav.module.scss';

interface props {
  className?: string;
}

const Nav: FC<props> = ({ className: classProps }) => {
  let newClasses = clsx(styles.cont, classProps);

  return (
    <nav className={newClasses}>
      <ul>
        <li>
          <a>explore</a>
        </li>
        <li>
          <a>about</a>
        </li>
        <li>
          <DarkModeToggle className={styles.dm} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
