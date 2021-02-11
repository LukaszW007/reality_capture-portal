// global dependencies
import React from 'react';
import throttle from 'lodash.throttle';
import { Link } from 'gatsby';

// local dependencies
import Logo from '../Logo';
import NavbarListElement from './NavbarListElement';
import styles from './Navbar.module.scss';

interface NavbarBlogProps {
  desktopScreenVersion: boolean;
}

interface NavbarBlogState {
  openMenu: boolean;
}

class NavbarBlog extends React.Component<NavbarBlogProps, NavbarBlogState> {
  constructor(props: NavbarBlogProps) {
    super(props);

    this.state = {
      openMenu: false,
    };
  }

  toggleOpen = (e: any) => {
    e.preventDefault();
    const { openMenu } = this.state;
    this.setState({ openMenu: !openMenu });
  };

  render() {
    const { openMenu } = this.state;
    const { desktopScreenVersion } = this.props;

    if (desktopScreenVersion) {
      return (
        // desktop
        <div className={styles.Navbar}>
          <div className={styles.Logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarBlog;
