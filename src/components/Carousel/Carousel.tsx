// global dependencies
import React from 'react';

// local dependencies
import styles from './Carousel.module.scss';
import LeftArrow from './CarouselElements/LeftArrow';
import RightArrow from './CarouselElements/RightArrow';
import CarouselSlide from './CarouselElements/CarouselSlide';
import CarouselDescriptionRCTypes from './CarouselElements/CarouselDescription';
import CarouselIndicator from './CarouselElements/CarouselIndicator';
import realityCaptureCarouselItems from '../../assets/data/realityCaptureCarouselItems';

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

  goToSlide(index: number) {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const slidesLength = realityCaptureCarouselItems.items.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const slidesLength = realityCaptureCarouselItems.items.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className={styles.Carousel}>
        <div
          className={
            realityCaptureCarouselItems.enableTextIndicators
              ? styles.CarouselTextIndicatorsBox
              : styles.CarouselTextIndicatorsBox_off
          }
        >
          <div className={styles.CarouselTextIndicatorsExtraSpace} />
          <ul className={styles.CarouseTextIndicators}>
            {realityCaptureCarouselItems.items.map((slide, index) => (
              <CarouselIndicator
                key={slide.id}
                index={index}
                activeIndex={activeIndex}
                name={slide.title}
                isDotIndicator={realityCaptureCarouselItems.enableDotIndicators}
                onClick={() => this.goToSlide(index)}
              />
            ))}
          </ul>
        </div>
        <div className={styles.CarouselSlideGroup}>
          <ul
            className={
              realityCaptureCarouselItems.enableTextIndicators
                ? styles.CarouselDescriptionRCTypes
                : styles.CarouselDescriptionRCTypes_off
            }
          >
            {realityCaptureCarouselItems.items.map((slide, index) => (
              <CarouselDescriptionRCTypes
                key={slide.id}
                index={index}
                activeIndex={activeIndex}
                slide={slide}
              />
            ))}
          </ul>

          <LeftArrow
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              this.goToPrevSlide(e)
            }
          />

          <ul className={styles.CarouselSlides}>
            {realityCaptureCarouselItems.items.map((slide, index) => (
              <CarouselSlide
                key={slide.id}
                index={index}
                activeIndex={activeIndex}
                slide={slide}
              />
            ))}
          </ul>

          <div
            className={
              realityCaptureCarouselItems.enableDotIndicators
                ? styles.CarouselDotIndicators
                : styles.CarouselDotIndicators_off
            }
          >
            <ul className={styles.CarouseDotIndicators}>
              {realityCaptureCarouselItems.items.map((slide, index) => (
                <CarouselIndicator
                  key={slide.id}
                  index={index}
                  activeIndex={activeIndex}
                  name=""
                  isDotIndicator={
                    realityCaptureCarouselItems.enableDotIndicators
                  }
                  onClick={() => this.goToSlide(index)}
                />
              ))}
            </ul>
          </div>

          <RightArrow
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              this.goToNextSlide(e)
            }
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
