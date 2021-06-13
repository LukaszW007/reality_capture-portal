// global dependencies
import React from 'react';

// local dependencies
import styles from './CarouselIndicator.module.scss';

interface IndicatorsProps {
  index: number;
  activeIndex: number;
  name: string;
  isDotIndicator: boolean;
  onClick(): any;
}

const CarouselIndicator: React.FC<IndicatorsProps> = props => {
  const { index, activeIndex, onClick, name, isDotIndicator } = props;

  // console.log(`This is info about dots: ${isDotIndicator}`);

  if (index === undefined || activeIndex === undefined || name === undefined) {
    return null;
  }
  if (isDotIndicator) {
    return (
      <li className={styles.CarouselIndicatorListElement_dot}>
        <a
          className={
            index === activeIndex
              ? styles.CarouselDotIndicator_active
              : styles.CarouselDotIndicator
          }
          onClick={onClick}
        >
        </a>
      </li>
    );
  }

  return (
    <li className={styles.CarouselIndicatorListElement}>
      <a
        className={
          index === activeIndex
            ? styles.CarouselIndicator_active
            : styles.CarouselIndicator
        }
        onClick={onClick}
      >
        {name}
      </a>
    </li>
  );
};

export default CarouselIndicator;
