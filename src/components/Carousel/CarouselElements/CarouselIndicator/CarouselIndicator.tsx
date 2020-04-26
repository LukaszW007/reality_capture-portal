// global dependencies
import React from 'react';

// local dependencies
import styles from './CarouselIndicator.module.scss';

interface IndicatorsProps {
  index: number;
  activeIndex: number;
  name: string;
  onClick(): any;
}

const CarouselIndicator: React.FC<IndicatorsProps> = props => {
  const { index, activeIndex, onClick, name } = props;

  if (index === undefined || activeIndex === undefined || name === undefined) {
    return null;
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
