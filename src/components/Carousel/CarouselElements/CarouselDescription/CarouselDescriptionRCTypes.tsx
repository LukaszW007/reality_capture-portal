// global dependencies
import React from 'react';

// local dependencies
// import arrow from '../../assets/SVG/carousel_arrow.svg';
import styles from './CarouselDescriptionRCTypes.module.scss';

interface CarouselDescriptionProps {
  index: number;
  activeIndex: number;
  slide: {
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
          ? styles.carousel__slide_active
          : styles.carousel__slide
      }
    >
      <p className={styles.carouselDescriptionRCTypes}>
        <strong className="carousel-slide__author">{slide.title}</strong>
        <small className="carousel-slide__source">{slide.content}</small>
      </p>
    </li>
  );
};

export default CarouselDescriptionRCTypes;
