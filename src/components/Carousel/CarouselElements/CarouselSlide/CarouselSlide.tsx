// global dependencies
import React from 'react';
import ReactPlayer from 'react-player';

// local dependencies
import styles from './CarouselSlide.module.scss';

interface CarouselSlideProps {
  windowWidth: number;
  index: number;
  activeIndex: number;
  slide: {
    id: string;
    title?: string;
    picture?: any;
    pictureAlt?: any;
    content?: string;
    webAddress?: string;
  };
}

const CarouselSlide: React.FC<CarouselSlideProps> = props => {
  const { windowWidth, activeIndex, slide, index } = props; // TODO: change classnames in last <p>
  if (slide === undefined || index === undefined || activeIndex === undefined) {
    return null;
  }
  const { picture, pictureAlt, title, webAddress } = slide;
  // console.log(`this is index ${index} activeindex= ${activeIndex}`);

  if (webAddress) {
    return (
      <li
        className={
          index === activeIndex
            ? styles.CarouselSlide_active
            : styles.CarouselSlide
        }
      >
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            url={webAddress}
            width={windowWidth >= 769 ? '50%' : '80%'}
            controls="true"
          />
        </div>
      </li>
    );
  }
  return (
    <li
      className={
        index === activeIndex
          ? styles.CarouselSlide_active
          : styles.CarouselSlide
      }
    >
      <picture>
        <source srcSet={picture} type="image/webp" />
        <source srcSet={pictureAlt} type="image/jpg" />
        <img
          src={picture}
          alt={title}
          className={styles.ImageInCarouselSlide}
          title={title}
          loading="lazy"
        />
      </picture>
    </li>
  );
};

export default CarouselSlide;
