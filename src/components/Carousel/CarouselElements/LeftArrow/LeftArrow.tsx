// global dependencies
import React from 'react';

// local dependencies
import styles from './LeftArrow.module.scss';

const LeftArrow: React.FC<any> = props => {
  const { onClick } = props;
  return (
    <a href="#" className={styles.CarouselArrow} onClick={onClick}>
      <span className={styles.ArrowSvgLeft} />
    </a>
  );
};

export default LeftArrow;
