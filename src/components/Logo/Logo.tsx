// global dependencies
import React from 'react';

// local dependencies
import logoPicture from '../../assets/images/Reality Capture logo 110x460_transparent_background.png';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <img src={logoPicture} alt="SimpleQuote" className={styles.Logo} />
    </>
  );
};

export default Logo;
