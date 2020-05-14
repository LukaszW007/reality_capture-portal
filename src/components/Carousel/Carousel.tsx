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

interface CarouselProps {
  enableDescription: boolean;
  enableTextIndicators: boolean;
  enableDotIndicators: boolean;
  items: object;
}

interface CarouselState {
  activeIndex: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
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
    const {
      enableDescription,
      enableTextIndicators,
      enableDotIndicators,
      items,
    } = this.props;

    if (
      enableDescription === undefined ||
      enableTextIndicators === undefined ||
      enableDotIndicators === undefined ||
      items === undefined
    ) {
      return null;
    }

    console.log(`active index-number ${activeIndex}`);
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
            {items.map((slide, index) => (
              <CarouselIndicator
                key={slide.id}
                index={index}
                activeIndex={activeIndex}
                name={slide.title}
                isDotIndicator={enableDotIndicators}
                onClick={() => this.goToSlide(index)}
              />
            ))}
          </ul>
        </div>
        <div className={styles.CarouselSlideGroup}>
          <ul
            className={
              enableTextIndicators
                ? styles.CarouselDescriptionRCTypes
                : styles.CarouselDescriptionRCTypes_off
            }
          >
            {items.map((slide, index) => (
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

          <div className={styles.SlidesWithDots}>
            <ul className={styles.CarouselSlides}>
              {items.map((slide, index) => (
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
                enableDotIndicators
                  ? styles.CarouselDotIndicators
                  : styles.CarouselDotIndicators_off
              }
            >
              <ul className={styles.CarouseDotIndicators}>
                {items.map((slide, index) => (
                  <CarouselIndicator
                    key={slide.id}
                    index={index}
                    activeIndex={activeIndex}
                    name=""
                    isDotIndicator={enableDotIndicators}
                    onClick={() => this.goToSlide(index)}
                  />
                ))}
              </ul>
            </div>
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
