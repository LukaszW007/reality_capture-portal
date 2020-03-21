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
  const { activeIndex, slide, index } = props; //TODO: change classnames in last <p>

  console.log('this is slide.image '+ `${slide.picture}`);
  return (
    <li
      className={
        index === activeIndex ? styles.carousel__slide : styles.carousel__slide
      }
    >
      <p className={styles.carousel__slide}>
        <img src={require(`${slide.picture}`)} alt="HDS" />
      </p>

      <p>
        <strong className="carousel-slide__author">{slide.title}</strong>
        <small className="carousel-slide__source">{slide.content}</small>
      </p>
    </li>
  );
};

export default CarouselSlide;
