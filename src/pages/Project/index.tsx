import {
  FC,
  useRef,
  useEffect,
  forwardRef,
  ComponentPropsWithRef,
  useContext,
} from 'react';
import clsx from 'clsx';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './Project.module.scss';
import { list as images } from './imageList';
import { usePointerMovement } from './hook';
import { useAppSelector, useAppDispatch } from 'store/hook';
import { fetchProjects } from 'store/project/slice';
import { IRepo } from 'services/api/Repos';
import { themeCtx } from 'context/theme-context';

export interface IPageProps {
  bannerStyles?: string;
  className?: string;
}

const Project: FC<IPageProps> = ({ className: classProps, bannerStyles }) => {
  const contRef = useRef<HTMLDivElement>(null);
  const {
    mouseMovement,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = usePointerMovement(contRef);

  const dispatch = useAppDispatch();
  const { entities } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <>
      <Page
        ref={contRef}
        className={clsx(classProps, styles.cont)}
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
        <Track<IRepo>
          moveBy={mouseMovement}
          data={entities}
        />
      </Page>
    </>
  );
};

type TrackProps<T> = {
  moveBy: number;
  data: T[];
};

const Track = <T extends IRepo>({ moveBy, data }: TrackProps<T>) => {
  const r = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (r.current) {
      r.current.animate([{ transform: `translateX(${moveBy}%)` }], {
        duration: 1200,
        fill: 'forwards',
      });
    }

    if (imgRefs.current) {
      imgRefs.current.forEach((el) => {
        el.animate([{ objectPosition: `${moveBy + 100}% 50%` }], {
          duration: 1200,
          fill: 'forwards',
        });
      });
    }
  }, [moveBy]);

  return (
    <div
      ref={r}
      className={styles.track}>
      {data.map((r, index) => (
        <TrackItem
          item={r}
          ref={(el) => (imgRefs.current[index] = el!)}
          alt={r.name}
          src={images[r.id % images.length].img}
          key={r.id}
        />
      ))}
    </div>
  );
};

interface Props extends ComponentPropsWithRef<'image'> {
  item: IRepo;
  src: string;
  alt: string;
}

const TrackItem = forwardRef<HTMLImageElement, Props>(
  ({ item, src, alt }, ref) => {
    const ctx = useContext(themeCtx);

    return (
      <article className={styles.child}>
        <div className={styles.backdrop} />
        <div className={styles.content}>
          <span>{item.language}</span>
          <span className={styles.tag}>{item.name}</span>
        </div>
        <img
          className={clsx(ctx.dark && styles.bgDark)}
          ref={ref}
          draggable={false}
          src={src}
          alt={alt}
        />
      </article>
    );
  }
);

export default Project;
