// global dependencies
import React from 'react';
import ReactPlayer from 'react-player';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { isChrome} from "react-device-detect";

// local dependencies
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import styles from './Index.module.scss';
import RealityCaptureTypesGallery from '../components/Gallery';
import ScanToBim from './sections/scan-to-BIM';
import Tutorials from './sections/tutorials';
import AboutMe from './sections/about-me';
import Footer from './sections/footer';
import realityCaptureCarouselItems from '../assets/data/realityCaptureCarouselItems';
import tutorialsCarouselItems from '../assets/data/tutorialsCarouselItems';
import Cursor from '../components/Cursor';
import Jumbotron from '../components/Jumbotron';

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
    configureAnchors({ offset: -100, scrollDuration: 400 });
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
        <Cursor desktopScreenVersion={isDesktop} />
        <SEO title="Homepage· 3d-points.com" />
        <div className={styles.App} onContextMenu={e => e.preventDefault()}>
          <ScrollableAnchor id="home">
            <div className={styles.section1}>
              <Navbar.Navbar desktopScreenVersion={isDesktop} />
              <Jumbotron />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id="reality_capture">
            <div className={styles.section2_3_4}>
              {/* <div className={styles.section2_3_4} id="reality_capture"> */}
              <div className={styles.section2}>
                <Carousel
                  windowWidth={windowWidth}
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
                  className={isChrome ? styles.reactPlayerChrome : styles.reactPlayer}
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  width={windowWidth >= 768 ? '50%' : '100%'}
                  controls="true"
                />
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id="scan_to_bim">
            <div className={styles.section5_scanToBim}>
              <ScanToBim />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id="tutorials">
            <div className={styles.section6_tutorials}>
              <Tutorials
                dataFromJson={tutorialsCarouselItems}
                desktopScreenVersion={isDesktop}
              />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id="about_me">
            <div className={styles.section7_aboutMe}>
              <AboutMe />
            </div>
          </ScrollableAnchor>
        </div>
        <Footer />
      </>
    );
  }
}

export default IndexPage;
