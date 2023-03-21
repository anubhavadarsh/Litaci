import { FC, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import DarkModeToggle from './DarkModeToggle';
import styles from './Nav.module.scss';
import { useDownloadResume } from './hook';

interface props {
  className?: string;
}

const Nav: FC<props> = ({ className: classProps }) => {
  let newClasses = clsx(styles.cont, classProps);

  let activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : undefined;

  const { makeRequest, resumeRef } = useDownloadResume();

  const handleClick = () => {
    if (resumeRef.current) {
      if (resumeRef.current.href.length == 0) {
        (async () => {
          const url = await makeRequest();

          if (resumeRef.current) {
            resumeRef.current.download = 'Anubhav Adarsh Resume.pdf';
            resumeRef.current.href = url;
            resumeRef.current.click();
          }
        })();
      }
    }
  };

  return (
    <nav className={newClasses}>
      <ul>
        <li>
          <a
            ref={resumeRef}
            onClick={handleClick}>
            resume
          </a>
        </li>
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
