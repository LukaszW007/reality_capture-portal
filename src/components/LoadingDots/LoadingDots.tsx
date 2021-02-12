// global dependencies
import React from 'react';

// local dependencies
import { graphql, Link } from 'gatsby';
import styles from './LoadingDots.module.scss';

const LoadingDots: React.FC<any> = props => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderDot} />
      <div className={styles.loaderDot} />
      <div className={styles.loaderDot} />
      <div className={styles.loaderDot} />
      <div className={styles.loaderDot} />
    </div>
  );
};

export default LoadingDots;
