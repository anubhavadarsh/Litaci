import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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
          <Link to='/'>explore</Link>
        </li>
        <li>
          <Link to='about'>about</Link>
        </li>
        <li>
          <DarkModeToggle className={styles.dm} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
