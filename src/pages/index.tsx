// global dependencies
import React from 'react';
import { Link } from 'gatsby';
import ReactPlayer from 'react-player';

// local dependencies
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';
import styles from './Index.module.scss';
import RealityCaptureTypesGallery from '../components/Gallery';
import ScanToBim from './sections/scan-to-BIM';
import Tutorials from './sections/tutorials';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={styles.App}>
      <div className={styles.section1}>
        <Navbar />
        <Jumbotron />
      </div>
      <div className={styles.section2_3_4}>
        <div className={styles.section2}>
          <Carousel />
        </div>
        <div className={styles.section3}>
          <RealityCaptureTypesGallery />
        </div>
        <div className={styles.section4_youtubeMovie}>
          <ReactPlayer
            className={styles.reactPlayer}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="50%"
          />
        </div>
      </div>
      <div className={styles.section5_scanToBim}>
        <ScanToBim />
      </div>
      <div className={styles.section6_tutorials}>
        <Tutorials />
      </div>
      <div className={styles.section7_aboutMe}>

      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
);

export default IndexPage;
