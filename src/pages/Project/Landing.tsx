import { useRef, useEffect } from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './Project.module.scss';
import { usePointerMovement } from './hook';
import { useAppSelector, useAppDispatch } from 'store/hook';
import { fetchProjects } from 'store/project/slice';
import { IRepo } from 'services/api/Repos';
import Track from 'components/Track';
import { ReactComponent as Arrow } from 'assets/icons/arrow-2.svg';

export interface IPageProps {
  bannerStyles?: string;
  className?: string;
}

const Landing = ({ className: classProps, bannerStyles }: IPageProps) => {
  const contRef = useRef<HTMLDivElement>(null);
  const {
    mouseMovement,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = usePointerMovement();

  const dispatch = useAppDispatch();
  const { entities } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <Page
      ref={contRef}
      className={clsx(classProps, styles.overflowHide)}
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseMove={(e) => handlePointerMove(e.clientX)}
      onMouseUp={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
      onTouchEnd={handlePointerUp}>
      <Banner
        main='project'
        className={clsx(bannerStyles)}
      />
      <div className={styles.cue}>
        <span>Drag</span>
        <Arrow
          height={80}
          width={80}
        />
      </div>
      <Track<IRepo>
        moveBy={mouseMovement}
        data={entities}
      />
    </Page>
  );
};

export default Landing;
