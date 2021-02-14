// global dependencies
import React from 'react';

// local dependencies
import styles from './CarouselDescriptionRCTypes.module.scss';

interface CarouselDescriptionProps {
  index: number;
  activeIndex: number;
  slide: {
    id: string;
    title: string;
    picture: string;
    content: string;
  };
}

const CarouselDescriptionRCTypes: React.FC<CarouselDescriptionProps> = props => {
  const { index, activeIndex, slide } = props;

  if (slide === undefined || index === undefined || activeIndex === undefined) {
    return null;
  }

  return (
    <li
      className={
        index === activeIndex
          ? styles.CarouselSlide_active
          : styles.CarouselSlide
      }
    >
      <div className={styles.carouselDescriptionRCTypes}>
        <p className={styles.carouselSlide_title}>{slide.title}</p>
        <p className={styles.carouselSlide_source}>{slide.content}</p>
      </div>
    </li>
  );
};

export default CarouselDescriptionRCTypes;
