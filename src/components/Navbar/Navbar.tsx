// global dependencies
import React from 'react';
import throttle from 'lodash.throttle';

// local dependencies
import Logo from '../Logo';
import NavbarListElement from './NavbarListElement';
import styles from './Navbar.module.scss';

const checkIsDesktop = () => window.innerWidth >= 769;

interface NavbarProps {
  desktopScreenVersion: boolean;
}

interface NavbarState {
  openMenu: boolean;
  isDesktop: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      openMenu: false,
      isDesktop: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.onResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  };

  onResize = () => {
    if (!checkIsDesktop()) {
      this.setState({ isDesktop: false });
    } else {
      this.setState({ isDesktop: true });
    }
  };

  onResize = throttle(this.onResize, 100, { leading: false });

  toggleOpen = e => {
    e.preventDefault();
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    this.onResize();
    const { openMenu, isDesktop } = this.state;

    if (isDesktop) {
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
            <NavbarListElement listElementName="Blog" />
            <NavbarListElement listElementName="Tutorials" />
            <NavbarListElement listElementName="About me" />
          </ul>
        </div>
      );
    }
    return (
      // mobile
      <div className={styles.Navbar}>
        <div className={styles.NavbarMobile}>
          <div className={styles.MenuBurgerContainer}>
            <div className={styles.Logo}>
              <Logo />
            </div>
            <div
              className={styles.MenuBurger}
              role="button"
              onClick={this.toggleOpen}
            >
              <span
                className={openMenu ? styles.ellipsis_open : styles.ellipsis}
              />
            </div>
          </div>
          <ul
            className={
              openMenu ? styles.NavListMobileOpen : styles.NavListMobileClosed
            }
          >
            <NavbarListElement listElementName="Home" />
            <NavbarListElement listElementName="Reality Capture" />
            <NavbarListElement listElementName="Scan-to-BIM" />
            <NavbarListElement listElementName="Blog" />
            <NavbarListElement listElementName="Tutorials" />
            <NavbarListElement listElementName="About me" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
