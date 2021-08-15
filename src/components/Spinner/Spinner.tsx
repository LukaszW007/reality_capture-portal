// global dependencies
import React, { useState } from 'react';
import { Link } from 'gatsby';

// local dependencies
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styles from './Spinner.module.scss';

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

const Spinner: React.FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pulseSpinner} />
    </div>
  );
};

export default Spinner;
