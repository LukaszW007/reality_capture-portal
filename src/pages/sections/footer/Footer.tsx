// global dependencies
import React from 'react';

// local dependencies
import { Link } from 'gatsby';
import styles from './Footer.module.scss';
import Logo from '../../../components/Logo';

const Footer: React.FC<any> = props => {
  const currentDate = new Date().getFullYear();
  return (
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <Link to="/privacyPolicyPage" className={styles.policy}>
        Privacy Policy
      </Link>
      <div className={styles.Sign}>
        © Designed and manufactured by Lukasz Wiszniewski, {currentDate}
      </div>
    </div>
  );
};

export default Footer;
