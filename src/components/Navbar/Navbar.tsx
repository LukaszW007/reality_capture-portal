// global dependencies
import React from 'react';
import throttle from 'lodash.throttle';

// local dependencies
import Logo from '../Logo';
import NavbarListElement from './NavbarListElement';
import styles from './Navbar.module.scss';

interface NavbarProps {
  desktopScreenVersion: boolean;
}

interface NavbarState {
  openMenu: boolean;
  isDesktop: boolean;
  windowWidth: number;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      openMenu: false,
      isDesktop: true,
      windowWidth: 0,
    };
  }

  UNSAFE_componentWillMount(): void {
    this.setState({ isDesktop: this.props.desktopScreenVersion });
  }

  componentDidMount = () => {
    console.log("BEGINING componentDidMount state.windowWidth in NAVBAR "+ this.state.windowWidth);
    this.setState({ windowWidth: window.innerWidth });
    this.onResize();
    window.addEventListener('resize', this.onResize);

    console.log("componentDidMount window.innerWidth in NAVBAR "+ window.innerWidth);
    console.log("componentDidMount state.isDekstop in NAVBAR "+ this.state.isDesktop);
    console.log("componentDidMount state.windowWidth in NAVBAR "+ this.state.windowWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  };

  onResize = () => {
    //this.setState({ windowWidth: window.innerWidth });
    if (!(this.state.windowWidth >= 769)) {
      this.setState({ isDesktop: false });
    } else {
      this.setState({ isDesktop: true });
    }
  };

  toggleOpen = e => {
    e.preventDefault();
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { openMenu, isDesktop, windowWidth } = this.state;
    const { desktopScreenVersion } = this.props;

    console.log("desktopScreenVersion from index.js in render NAVBAR "+ this.props.desktopScreenVersion);
    console.log("state.windowWidth in render NAVBAR "+ windowWidth);
    console.log("isDekstop in render NAVBAR "+ isDesktop);

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
