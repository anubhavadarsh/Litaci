import { FC, forwardRef, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

import styles from './Page.module.scss';

interface Props {
  motionProps?: HTMLMotionProps<'div'>;
  children: ReactNode;
  className?: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ motionProps, className, children }, ref) => {
    return (
      <motion.div
        {...motionProps}
        className={clsx(styles.Page, className)}
        ref={ref}>
        {children}
      </motion.div>
    );
  }
);

export default Page;
