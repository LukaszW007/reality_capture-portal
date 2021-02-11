import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.css';
import styles from './Layout.module.scss';
import NavbarBlog from '../Navbar/NavbarBlog';
import Footer from '../../pages/sections/footer';

const Layout: React.FC = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <div className={styles.layoutContainer}>
        <NavbarBlog desktopScreenVersion />
        <main className={styles.childrenContainer}>{children}</main>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
