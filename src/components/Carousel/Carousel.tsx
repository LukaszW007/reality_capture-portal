// global dependencies
import React from 'react';

// local dependencies
// import arrow from '../../assets/SVG/carousel_arrow.svg';
import styles from './Carousel.module.scss';
import LeftArrow from './CarouselElements/LeftArrow';
import RightArrow from './CarouselElements/RightArrow';
import CarouselSlide from './CarouselElements/CarouselSlide';
import CarouselDescriptionRCTypes from './CarouselElements/CarouselDescription';
import carouselItems from './carouselItems';

/* interface CarouselProps {

} */

interface CarouselState {
  activeIndex: number;
}

class Carousel extends React.Component<any, CarouselState> {
  constructor(props: any) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide(index) {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const slidesLength = carouselItems.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const slidesLength = carouselItems.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className={styles.Carousel}>
        <ul className={styles.CarouselDescriptionRCTypes}>
          {carouselItems.map((slideDescription, index) => (
            <CarouselDescriptionRCTypes
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slideDescription}
            />
          ))}
        </ul>

        <LeftArrow
          onClick={e => this.goToPrevSlide(e)}
        />

        <ul className={styles.CarouselSlides}>
          {carouselItems.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <RightArrow
          onClick={e => this.goToNextSlide(e)}
        />
      </div>
    );
  }
}

export default Carousel;
