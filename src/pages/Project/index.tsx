import { FC, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import Page from 'containers/Page';
import Banner from 'containers/Banner';
import styles from './Project.module.scss';
import { list } from './projectList';

export interface IPageProps {
  bannerStyles?: string;
  className?: string;
}

const Project: FC<IPageProps> = ({ className: classProps, bannerStyles }) => {
  const [mouseMovement, setMouseMovement] = useState(0);

  const contRef = useRef<HTMLDivElement>(null);

  const newClasses = clsx(classProps, styles.cont);

  const mouseAtRef = useRef(0);
  const prevMousePosRef = useRef(mouseMovement);

  const handlePointerDown = (cx: number) => {
    mouseAtRef.current = cx;
  };

  const handlePointerMove = (cx: number) => {
    if (mouseAtRef.current === 0) return;

    const mouseDelta = mouseAtRef.current - cx,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentage = Math.max(
        Math.min(prevMousePosRef.current + percentage, 0),
        -100
      );

    setMouseMovement(nextPercentage);
  };
  const handlePointerUp = () => {
    mouseAtRef.current = 0;
    prevMousePosRef.current = mouseMovement;
  };

  return (
    <>
      <Page
        ref={contRef}
        className={newClasses}
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
        <Track moveBy={mouseMovement} />
      </Page>
    </>
  );
};

const Track: FC<{ moveBy: number }> = ({ moveBy }) => {
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
      {list.map((i, index) => (
        <motion.img
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.3 }}
          ref={(el) => {
            imgRefs.current[index] = el!;
          }}
          draggable={false}
          src={i.img}
          key={i.img}
          alt='test'
        />
      ))}
    </div>
  );
};

export default Project;
