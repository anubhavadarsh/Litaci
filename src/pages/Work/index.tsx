import { FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import SplitSection from 'components/SplitSection';
import { IPageProps } from 'pages/Project';
import styles from './Work.module.scss';
import Banner from 'containers/Banner';
import { useScroll } from 'framer-motion';

const Work: FC<IPageProps> = ({ bannerStyles, className: classProps }) => {
  return (
    <Page className={classProps}>
      <WorkSplitSection bannerStyles={bannerStyles} />
    </Page>
  );
};

const companies = [
  {
    name: 'Bright Money',
    src: '',
  },
  {
    name: 'Merakii',
    src: '',
  },
  {
    name: 'Founders Lab',
    src: '',
  },
  {
    name: 'Innovatyv',
    src: '',
  },
];

type IWSSProps = Omit<IPageProps, 'className'>;

const WorkSplitSection: FC<IWSSProps> = ({ bannerStyles }) => {
  const [choice, setChoice] = useState(-1);

  const handleSecClose = () => {
    setChoice(-1);
  };

  const handleSecSet = (index: number) => {
    setChoice(index);
  };

  const isOpen = choice != -1;

  return (
    <SplitSection
      closeSection={handleSecClose}
      isOpen={isOpen}
      company={isOpen ? companies[choice].name : ''}>
      <Banner
        main='work'
        className={clsx(bannerStyles, styles.banner, isOpen && styles.__split)}>
        {companies.map((c, i) => {
          return (
            <a
              key={i}
              className={clsx(choice == i && styles.__active)}
              onClick={(e) => {
                e.stopPropagation();
                handleSecSet(i);
              }}>
              {c.name}
            </a>
          );
        })}
      </Banner>
    </SplitSection>
  );
};

export default Work;
