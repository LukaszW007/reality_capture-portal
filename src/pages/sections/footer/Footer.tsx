// global dependencies
import React from 'react';

// local dependencies
import styles from './Footer.module.scss';
import Logo from '../../../components/Logo';

const Footer: React.FC<any> = props => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.Sign}>
        Designed and manufactured by Lukasz Wiszniewski
      </div>
    </div>
  );
};

export default Footer;
