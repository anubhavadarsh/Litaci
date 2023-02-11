import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import DarkModeToggle from './DarkModeToggle';
import styles from './Nav.module.scss';

interface props {
  className?: string;
}

const Nav: FC<props> = ({ className: classProps }) => {
  let newClasses = clsx(styles.cont, classProps);

  let activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : undefined;

  return (
    <nav className={newClasses}>
      <ul>
        <li>
          <NavLink
            to='/'
            className={activeClass}>
            explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to='about'
            className={activeClass}>
            about
          </NavLink>
        </li>
        <li>
          <DarkModeToggle className={styles.dm} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
