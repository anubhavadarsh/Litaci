import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Page.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const Page: FC<Props> = ({ children, className }) => {
  return <div className={clsx(styles.Page, className)}>{children}</div>;
};

export default Page;
