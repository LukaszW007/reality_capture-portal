// global dependencies
import React from 'react';

// local dependencies
import Logo from '../Logo';
import NavbarListElement from './NavbarListElement';
import styles from './Navbar.module.scss';

interface NavbarProps {
  desktopScreenVersion: boolean;
}

const Navbar: React.FC<NavbarProps> = props => {
  const { desktopScreenVersion } = props;
  if (desktopScreenVersion) {
    return (
      // desktop
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
  }
  return (
    // mobile
    <div className={styles.Navbar}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <ul className={styles.NavList}>
        <NavbarListElement listElementName="Home" />
      </ul>
    </div>
  );
};

export default Navbar;
