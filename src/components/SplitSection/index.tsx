import { FC, useState } from 'react';
import clsx from 'clsx';

import Banner from 'containers/Banner';
import styles from './SplitSection.module.scss';

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

const SplitSection = () => {
  const [company, setCompany] = useState(-1);

  const handleSplit = () => {
    setCompany(-1);
  };

  const handleClick = (index: number) => {
    setCompany(index);
  };

  return (
    <div className={styles.main}>
      <section
        className={clsx(company != -1 && styles.__split)}
        onClick={handleSplit}>
        <Banner
          main='work'
          className={styles.banner}>
          {companies.map((c, i) => {
            return (
              <a
                key={i}
                className={clsx(company == i && styles.__active)}
                onClick={(event) => {
                  event.stopPropagation();
                  handleClick(i);
                }}>
                {c.name}
              </a>
            );
          })}
        </Banner>
      </section>
      <section>{company != -1 ? companies[company].name : null}</section>
    </div>
  );
};

export default SplitSection;
