import React from 'react';
import { Link } from 'gatsby';

// import Layout from "../components/layout"
// import Image from '../components/image';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';
import CarouselDescriptionRCTypes from '../components/CarouselDescription';
import styles from './App.module.scss';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={styles.App}>
      <div className={styles.section1}>
        <Navbar />
        <Jumbotron />
      </div>
      <div className={styles.section2}>
        <CarouselDescriptionRCTypes />
        <Carousel />
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
);

export default IndexPage;
