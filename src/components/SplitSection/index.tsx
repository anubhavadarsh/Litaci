import { FC, ReactNode } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import clsx from 'clsx';

import styles from './SplitSection.module.scss';

interface IProps {
  company: string;
  isOpen: boolean;
  closeSection: () => void;
  children?: ReactNode;
}

const SplitSection: FC<IProps> = ({
  isOpen,
  company,
  closeSection,
  children,
}) => {
  return (
    <div className={clsx(styles.main, isOpen && styles.__split)}>
      <LayoutGroup>
        <motion.section
          onClick={closeSection}
          layout
          style={{
            width: isOpen ? '50%' : '100%',
          }}
          transition={{
            type: 'tween',
            duration: 0.5,
          }}>
          {children}
        </motion.section>
        <AnimatePresence>
          {isOpen && (
            <motion.section
              variants={overlay}
              initial='initial'
              animate='animate'
              exit='exit'>
              {company}
            </motion.section>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

const overlay = {
  initial: {
    x: '100vw',
    opacity: 0,
  },
  animate: {
    x: '50vw',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default SplitSection;
