// global dependencies
import React from 'react';
import { Link } from 'gatsby';
import ReactPlayer from 'react-player';

// local dependencies
import throttle from 'lodash.throttle';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';
import styles from './Index.module.scss';
import RealityCaptureTypesGallery from '../components/Gallery';
import ScanToBim from './sections/scan-to-BIM';
import Tutorials from './sections/tutorials';
import AboutMe from './sections/about-me';
import Footer from './sections/footer';
import realityCaptureCarouselItems from '../assets/data/realityCaptureCarouselItems';
import tutorialsCarouselItems from '../assets/data/tutorialsCarouselItems';

interface IndexPageState {
  isDesktop: boolean;
  windowWidth: number;
}

class IndexPage extends React.Component<any, IndexPageState> {
  constructor(props: any) {
    super(props);

    this.state = {
      windowWidth: 0,
      isDesktop: true,
    };
  }

  componentDidMount = () => {
    this.setState({ windowWidth: window.innerWidth });
    this.onResize();
    window.addEventListener('resize', this.onResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  };

  onResize = () => {
    console.log('this.onResize was in index.js was triggered');
    if (!(window.innerWidth >= 769)) {
      this.setState({ isDesktop: false });
    } else {
      this.setState({ isDesktop: true });
    }
  };

  render() {
    const { isDesktop, windowWidth } = this.state;

    return (
      <>
        <SEO title="Home" />
        <div className={styles.App}>
          <div className={styles.section1}>
            <Navbar desktopScreenVersion={isDesktop} />
            <Jumbotron />
          </div>
          <div className={styles.section2_3_4}>
            <div className={styles.section2}>
              <Carousel
                enableDescription={
                  realityCaptureCarouselItems.enableDescription
                }
                enableTextIndicators={
                  realityCaptureCarouselItems.enableTextIndicators
                }
                enableDotIndicators={
                  realityCaptureCarouselItems.enableDotIndicators
                }
                items={realityCaptureCarouselItems.items}
                desktopScreenVersion={isDesktop}
              />
            </div>
            <div
              className={isDesktop ? styles.section3 : styles.section3Mobile}
            >
              <RealityCaptureTypesGallery />
            </div>
            <div className={styles.section4_youtubeMovie}>
              <ReactPlayer
                className={styles.reactPlayer}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width={windowWidth >= 1183 ? '50%' : '100%'}
                controls="true"
              />
            </div>
          </div>
          <div className={styles.section5_scanToBim}>
            <ScanToBim />
          </div>
          <div className={styles.section6_tutorials}>
            <Tutorials
              dataFromJson={tutorialsCarouselItems}
              desktopScreenVersion={isDesktop}
            />
          </div>
          <div className={styles.section7_aboutMe}>
            <AboutMe />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default IndexPage;
