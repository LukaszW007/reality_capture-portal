// global dependencies
import React from 'react';

// local dependencies
import styles from './CarouselSlide.module.scss';

interface CarouselSlideProps {
  index: number;
  activeIndex: number;
  slide: {
    id: string;
    title: string;
    picture: any;
    content: string;
  };
}

const CarouselSlide: React.FC<CarouselSlideProps> = props => {
  const { activeIndex, slide, index } = props; // TODO: change classnames in last <p>
  if (slide === undefined || index === undefined || activeIndex === undefined) {
    return null;
  }
  const { picture } = slide;
  console.log(`this is index ${index} activeindex= ${activeIndex}`);
  return (
    <li
      className={
        index === activeIndex
          ? styles.CarouselSlide_active
          : styles.CarouselSlide
      }
    >
      <p>
        <img src={picture} alt="HDS" className={styles.ImageInCarouselSlide} />
      </p>
    </li>
  );
};

export default CarouselSlide;
