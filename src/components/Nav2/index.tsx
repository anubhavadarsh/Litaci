import { FC } from 'react';

import styles from './Nav.module.scss';

const Nav: FC = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Newsletter</li>
        <li>Microblog</li>
      </ul>
    </nav>
  );
};

export default Nav;
