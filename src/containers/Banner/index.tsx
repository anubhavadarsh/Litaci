import { FC, forwardRef, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

import styles from './Banner.module.scss';

interface Props {
  motionProps?: HTMLMotionProps<'div'>;
  main: string;
  className?: string;
  children?: ReactNode;
}

const Banner: FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ main, className, motionProps, children }, ref) => {
    let newClasses = clsx(styles.banner, className);

    return (
      <motion.div
        {...motionProps}
        ref={ref}
        className={newClasses}>
        <h1>
          {main}
          <span>;</span>
        </h1>
        <h2>{children}</h2>
      </motion.div>
    );
  }
);

export default Banner;
