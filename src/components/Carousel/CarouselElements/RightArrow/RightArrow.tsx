// global dependencies
import React, { Component } from 'react';

// local dependencies
// import arrow from '../../assets/SVG/carousel_arrow.svg';
import styles from './RightArrow.module.scss';

const RightArrow: React.FC<any> = props => {
  const { onClick } = props;
  return (
    <a href="#" className={styles.CarouselArrow} onClick={onClick}>
      <span className={styles.ArrowSvgRight} />
    </a>
  );
};

export default RightArrow;
