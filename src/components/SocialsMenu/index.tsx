import clsx from 'clsx';
import { FC } from 'react';

import styles from './Socials.module.scss';

const socialList: Social[] = [
  {
    name: 'twitter',
    link: 'https://www.twitter.com/',
    handle: 'AnubhavAdarsh9',
  },
  {
    name: 'medium',
    link: 'https://www.medium.com/',
    handle: '@anubhav.adarsh9',
  },
  {
    name: 'github',
    link: 'https://www.github.com/',
    handle: 'anubhavadarsh',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/',
    handle: 'litaci',
  },
];

interface props {
  classname?: string;
}

const SocialsMenu: FC<props> = ({ classname: classProps }) => {
  let newClasses = clsx(styles.cont, classProps);

  return (
    <div className={newClasses}>
      <span className={styles.tag}>follow</span>
      <ul>
        {socialList.map((c) => (
          <li key={c.name}>
            <SocialBtn
              handle={c.handle}
              link={c.link}
              name={c.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Social {
  name: string;
  link: string;
  handle: string;
}

const SocialBtn: FC<Social> = ({ name, handle, link }) => {
  return (
    <a
      target='_blank'
      href={`${link}${handle}`}
      className={styles.btn}>
      {name}
    </a>
  );
};

export default SocialsMenu;
