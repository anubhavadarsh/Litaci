import { FC, forwardRef, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

import styles from './Page.module.scss';

interface Props extends HTMLMotionProps<'div'> {
  motionProps?: HTMLMotionProps<'div'>;
  children: ReactNode;
  className?: string;
}

//TODO: Fix the remove forward ref with motion() refer: https://www.framer.com/motion/component/
const Page = forwardRef<HTMLDivElement, Props>(
  (
    {
      motionProps,
      className,
      children,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onTouchMove,
      onTouchStart,
      onTouchEnd,
    },
    ref
  ) => {
    return (
      <motion.div
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        {...motionProps}
        className={clsx(styles.Page, className)}
        ref={ref}>
        {children}
      </motion.div>
    );
  }
);

export default Page;
