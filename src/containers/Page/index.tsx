import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Page.module.scss';

interface Props extends ComponentPropsWithRef<'article'> {
  children: ReactNode;
}
export type Ref = HTMLDivElement;

const Page = forwardRef<Ref, Props>(({ className, children, ...addn }, ref) => {
  return (
    <article
      className={clsx(styles.Page, className)}
      {...addn}
      ref={ref}>
      {children}
    </article>
  );
});

export default Page;
