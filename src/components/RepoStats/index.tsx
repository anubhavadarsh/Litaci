import styles from './RepoStats.module.scss';

import { ReactComponent as ForkIcon } from 'assets/icons/fork.svg';
import { ReactComponent as ReadmeIcon } from 'assets/icons/readme.svg';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import { ReactComponent as WatchIcon } from 'assets/icons/watch.svg';

const Stats = ({
  starCount,
  watchCount,
  forkCount,
}: {
  starCount: number;
  watchCount: number;
  forkCount: number;
}) => {
  return (
    <>
      <Stat
        Icon={ReadmeIcon}
        text='Readme'
      />
      <Stat
        Icon={StarIcon}
        text='stars'
        count={starCount}
      />
      <Stat
        Icon={WatchIcon}
        text='watching'
        count={watchCount}
      />
      <Stat
        Icon={ForkIcon}
        text='forks'
        count={forkCount}
      />
    </>
  );
};

const Stat = ({
  text,
  Icon,
  count,
}: {
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGAElement>>;
  count?: number;
}) => (
  <div className={styles.stat}>
    <span>
      <Icon />
      {count === undefined || <strong>{count}</strong>}
      {text}
    </span>
  </div>
);

export default Stats;
