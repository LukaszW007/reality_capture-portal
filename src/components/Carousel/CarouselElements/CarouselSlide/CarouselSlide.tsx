// global dependencies
import React from 'react';

// local dependencies
import styles from './CarouselSlide.module.scss';

interface CarouselSlideProps {
  index: number;
  activeIndex: number;
  slide: {
    title: string;
    picture: any;
    content: string;
  };
}

const CarouselSlide: React.FC<CarouselSlideProps> = props => {
  const { activeIndex, slide, index } = props; // TODO: change classnames in last <p>
  const { picture } = slide;

  console.log(`this is slide.image ${picture} w dolarze ` + `${picture}`);
  return (
    <li
      className={
        index === activeIndex ? styles.carousel__slide : styles.carousel__slide
      }
    >
      <p className={styles.carousel__slide}>
        <img src={require('../../../../assets/images/RTC360.png')} alt="HDS" />
      </p>
    </li>
  );
};

export default CarouselSlide;
