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
      <p className={styles.carouselDescriptionRCTypes}>
        <a className={styles.carouselSlide_title}>{slide.title}</a>
        <a className={styles.carouselSlide_source}>{slide.content}</a>
      </p>
    </li>
  );
};

export default CarouselDescriptionRCTypes;
