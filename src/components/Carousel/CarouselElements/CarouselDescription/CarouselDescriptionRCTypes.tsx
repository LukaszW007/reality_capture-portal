// global dependencies
import React from 'react';

// local dependencies
// import arrow from '../../assets/SVG/carousel_arrow.svg';
import styles from './CarouselDescriptionRCTypes.module.scss';

/*const CarouselDescriptionRCTypes = (props: any) => {
  return (
    <div className={styles.CarouselDescriptionRCTypes}>
      <p
        className={
          props.index === props.activeIndex
            ? styles.carousel__slide
            : styles.carousel__slide
        }
      >
        <strong className="carousel-slide__author">{props.slide.title}</strong>
        <small className="carousel-slide__source">{props.slide.content}</small>
      </p>
    </div>
  );
};*/
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
  // console.log('PROPS from DESC '+ props.slide.title);

  // console.log('slide po rozbiciu '+ slide.title);
  // console.log('title!!!!!!!! '+title);

  if (!props) {
    return null;
  }
  // const { activeIndex, slide, index } = props;
  // const { title, content } = slide;
  if (props) {
    console.log(`props${JSON.stringify(props)}`);
    console.log(`props.slide.title${props.slide.title}`);

    return (
      <div className={styles.CarouselDescriptionRCTypes}>
        <p
          className={
            props.index === props.activeIndex
              ? styles.carousel__slide
              : styles.carousel__slide
          }
        >
          <strong className="carousel-slide__author">
            {props.slide.title}
          </strong>
          <small className="carousel-slide__source">
            {props.slide.content}
          </small>
        </p>
      </div>
    );
  }
};

export default CarouselDescriptionRCTypes;
