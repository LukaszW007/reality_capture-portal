// global dependencies
import React from 'react';
import throttle from 'lodash.throttle';

// local dependencies
import styles from './Carousel.module.scss';
import LeftArrow from './CarouselElements/LeftArrow';
import RightArrow from './CarouselElements/RightArrow';
import CarouselSlide from './CarouselElements/CarouselSlide';
import CarouselDescriptionRCTypes from './CarouselElements/CarouselDescription';
import CarouselIndicator from './CarouselElements/CarouselIndicator';
import realityCaptureCarouselItems from '../../assets/data/realityCaptureCarouselItems';

interface CarouselProps {
  windowWidth: number;
  enableDescription: boolean;
  enableTextIndicators: boolean;
  enableDotIndicators: boolean;
  items: object;
  desktopScreenVersion: boolean;
}

interface CarouselState {
  activeIndex: number;
  isDesktop: boolean;
  windowWidth: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: any) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
      isDesktop: this.props.desktopScreenVersion,
      windowWidth: 0,
    };
  }

  // componentDidMount = () => {
  //   this.setState({ windowWidth: window.innerWidth });
  //   //window.addEventListener('resize', this.onResize);
  // };
  //
  // componentWillUnmount = () => {
  //   window.removeEventListener('resize', this.onResize);
  // };
  //
  // onResize = () => {
  //   this.setState({ windowWidth: window.innerWidth });
  //   if (!(this.state.windowWidth >= 769)) {
  //     this.setState({ isDesktop: false });
  //   } else {
  //     this.setState({ isDesktop: true });
  //   }
  // };

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
    const { activeIndex, isDesktop } = this.state;
    const {
      windowWidth,
      enableDescription,
      enableTextIndicators,
      enableDotIndicators,
      items,
      desktopScreenVersion,
    } = this.props;

    console.log(`active index-number ${activeIndex}`); // TODO check hight of the bottom margin in top carousel
    console.log('Carousel isDesktop: '+ isDesktop);
    if (desktopScreenVersion) {
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
            <ul className={styles.CarouselTextIndicators}>
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
                    windowWidth={windowWidth}
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
                <ul className={styles.CarouselDotIndicators}>
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
    return (
      <div className={styles.CarouselMobile}>
        <div className={styles.CarouselSlideGroupMobile}>
          <LeftArrow
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              this.goToPrevSlide(e)

            }
          />

          <div className={styles.SlidesWithDots}>
            <ul className={styles.CarouselSlides}>
              {items.map((slide, index) => (
                <CarouselSlide
                  windowWidth={windowWidth}
                  key={slide.id}
                  index={index}
                  activeIndex={activeIndex}
                  slide={slide}
                />
              ))}
            </ul>

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

            <div
              className={
                enableDotIndicators
                  ? styles.CarouselDotIndicators
                  : styles.CarouselDotIndicators_off
              }
            >
              <ul className={styles.CarouselDotIndicators}>
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
            className={styles.Arrow}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
