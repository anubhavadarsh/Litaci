import Socials from 'components/SocialsMenu';
import { Dispatch, FC, useEffect, useState, SetStateAction } from 'react';

import DarkModeToggle from './DarkModeToggle';
import styles from './Nav.module.scss';

const Nav: FC = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (expand) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [expand]);

  return (
    <>
      <nav
        className={styles.Navbar}
        style={{ height: expand ? '100vh' : undefined }}>
        <section>
          <HamburgerMenu setExpand={setExpand} />
        </section>
        {expand && (
          <section className={styles.extend}>
            <div className={styles.dmtoggleCont}>
              <DarkModeToggle />
            </div>
            <div>
              <Socials />
            </div>
            <div>
              <Watermark />
            </div>
          </section>
        )}
      </nav>
    </>
  );
};

interface HMProps {
  setExpand: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu: FC<HMProps> = ({ setExpand }) => {
  const toggleHamMenu = () => {
    setExpand((prev) => !prev);
  };

  return (
    <a
      className={styles.hamMenu}
      onClick={toggleHamMenu}>
      <b></b>
      <b></b>
      <b></b>
    </a>
  );
};

const Watermark: FC = () => {
  return <h2 className={styles.Watermark}>Made with 💗 by Litaci</h2>;
};

export default Nav;
