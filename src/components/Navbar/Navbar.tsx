// global dependencies
import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// local dependencies
import Logo from '../Logo';
import NavbarListElement from './NavbarListElement';
import styles from './Navbar.module.scss';
import SocialMediaMenu from '../SocialMediaMenu';

interface NavbarProps {
  desktopScreenVersion: boolean;
}

interface NavbarState {
  openMenu: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      openMenu: false,
    };
  }

  toggleOpen = (e: any) => {
    e.preventDefault();
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { openMenu } = this.state;
    const { desktopScreenVersion } = this.props;

    if (desktopScreenVersion) {
      return (
        // desktop
        <div className={styles.Navbar}>
          <div className={styles.Logo}>
            <OutboundLink href="#home">
              <Logo />
            </OutboundLink>
          </div>
          <ul className={styles.NavList}>
            <NavbarListElement listElementName="Home" reference="#home" />
            {/* <AnchorLink to="#reality_capture"> */}
            {/*  <NavbarListElement listElementName="Reality Capture" /> */}
            {/* </AnchorLink> */}
            <NavbarListElement
              listElementName="Reality Capture"
              reference="#reality_capture"
            />
            <NavbarListElement
              listElementName="Scan-to-BIM"
              reference="#scan_to_bim"
            />
            <NavbarListElement
              listElementName="Tutorials"
              reference="#tutorials"
            />
            <NavbarListElement
              listElementName="About me"
              reference="#about_me"
            />
            <NavbarListElement listElementName="Blog" reference="/blog" />
          </ul>
          <SocialMediaMenu />
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
            <NavbarListElement listElementName="Home" reference="#home" />
            {/* <AnchorLink to="#reality_capture"> */}
            {/*  <NavbarListElement listElementName="Reality Capture" /> */}
            {/* </AnchorLink> */}
            <NavbarListElement
              listElementName="Reality Capture"
              reference="#reality_capture"
            />
            <NavbarListElement
              listElementName="Scan-to-BIM"
              reference="#scan_to_bim"
            />
            <NavbarListElement
              listElementName="Tutorials"
              reference="#tutorials"
            />
            <NavbarListElement
              listElementName="About me"
              reference="#about_me"
            />
            <Link to="/blog">
              <NavbarListElement listElementName="Blog" />
            </Link>
          </ul>
          <SocialMediaMenu />
        </div>
      </div>
    );
  }
}

export default Navbar;
