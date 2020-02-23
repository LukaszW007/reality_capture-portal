// global dependencies
import React from 'react';

// local dependencies
import styles from './Logo.module.scss';
import logoPicture from '../../assets/images/Reality_Capture_white_logo_365x110_transparent_background.png';

const Logo = () => {
  return (
    <>
      <img
        src={logoPicture}
        alt="top-view-desk-wood-and-coffee"
        className={styles.Logo}
      />
    </>
  );
};

export default Logo;
