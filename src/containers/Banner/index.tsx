import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Banner.module.scss';

interface Props {
  main: string;
  className?: string;
  children?: ReactNode;
}

const Banner: FC<Props> = ({ main, className, children }) => {
  let newClasses = clsx(styles.banner, className);

  return (
    <div className={newClasses}>
      <h1>
        {main}
        <span>;</span>
      </h1>
      <h2>{children}</h2>
    </div>
  );
};

export default Banner;
