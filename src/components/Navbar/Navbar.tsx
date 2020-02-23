// global dependencies
import React from 'react';

// local dependencies
import Logo from '../Logo';
import NavbarListElement from './NavbarListElement';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <ul className={styles.NavList}>
        <NavbarListElement listElementName="Home" />
        <NavbarListElement listElementName="Reality Capture" />
        <NavbarListElement listElementName="Scan-to-BIM" />
        <NavbarListElement listElementName="Tutorials" />
        <NavbarListElement listElementName="About me" />
      </ul>
    </div>
  );
};

export default Navbar;
