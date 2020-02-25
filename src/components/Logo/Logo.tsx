// global dependencies
import React from 'react';

// local dependencies
import logoPicture from '../../assets/images/Reality_Capture_white_logo_365x110_transparent_background.png';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <img src={logoPicture} alt="Logo" className={styles.Logo} />
    </>
  );
};

export default Logo;
