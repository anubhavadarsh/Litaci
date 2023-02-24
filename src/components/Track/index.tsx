import {
  useRef,
  useEffect,
  forwardRef,
  ComponentPropsWithRef,
  useContext,
} from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './Track.module.scss';
import { list as images } from 'pages/Project/imageList';
import { IRepo } from 'services/api/Repos';
import { themeCtx } from 'context/theme-context';

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
          src={images[(index + 4) % images.length].img}
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
    const navigate = useNavigate();

    const mouseInitialRef = useRef(0);
    const mouseAtRef = useRef(0);

    const handlePointerDown = (cx: number) => {
      mouseInitialRef.current = cx;
      mouseAtRef.current = cx;
    };

    const handlePointerMove = (cx: number) => {
      mouseAtRef.current = cx;
    };

    const handlePointerUp = () => {
      if (mouseAtRef.current !== mouseInitialRef.current) return;

      mouseAtRef.current = 0;
      mouseInitialRef.current = 0;
      navigate(`/project/${item.name}`);
    };

    return (
      <motion.article
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={styles.child}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}>
        <div className={styles.backdrop} />
        <div className={styles.content}>
          <div>
            <span className={styles.tag}>{item.name}</span>
          </div>
          <span>{item.language}</span>
        </div>
        <img
          className={clsx(ctx.dark && styles.bgDark)}
          ref={ref}
          draggable={false}
          src={src}
          alt={alt}
        />
      </motion.article>
    );
  }
);

export default Track;
