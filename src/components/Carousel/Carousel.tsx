// global dependencies
import React from 'react';

// local dependencies
// import arrow from '../../assets/SVG/carousel_arrow.svg';
import styles from './Carousel.module.scss';
import LeftArrow from './CarouselElements/LeftArrow';
import RightArrow from './CarouselElements/RightArrow';
import CarouselSlide from './CarouselElements/CarouselSlide';

const carouselItems = [
  {
    title: 'Laser scanning',
    picture: "'../../../../assets/images/RTC360.png'",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
  },
  {
    title: 'Mobile mapping',
    picture: '',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
  },
];

/* interface CarouselProps {

} */

interface CarouselState {
  activeIndex: number;
}

class Carousel extends React.Component<any, CarouselState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  // goToSlide(index) {
  //   this.setState({ activeIndex: index });
  // }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    // let { slides } = this.props;
    // let slidesLength = slides.length;
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
    // let { slides } = this.props;
    // let slidesLength = slides.length - 1;
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
        <LeftArrow onClick={e => this.goToPrevSlide(e)} />

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
          className={styles.RightArrow}
          onClick={e => this.goToNextSlide(e)}
        />
      </div>
    );
  }
}

export default Carousel;
