import { ComponentPropsWithRef, FC, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Banner.module.scss';

interface Props extends ComponentPropsWithRef<'div'> {
  main: string;
  children?: ReactNode;
}
export type Ref = HTMLDivElement;

const Banner: FC<Props> = forwardRef<Ref, Props>(
  ({ main, className, children, ...addn }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.banner, className)}
        {...addn}>
        <h1>
          {main}
          <span>;</span>
        </h1>
        <h2>{children}</h2>
      </div>
    );
  }
);

export default Banner;
