import React from 'react';
import { Link } from 'gatsby';

// import Layout from "../components/layout"
// import Image from '../components/image';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import styles from './App.module.scss';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={styles.App}>
      <Navbar />
      <Jumbotron />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
);

export default IndexPage;
