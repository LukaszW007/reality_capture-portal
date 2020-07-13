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
import AboutMe from './sections/about-me';
import Footer from './sections/footer';
import realityCaptureCarouselItems from '../assets/data/realityCaptureCarouselItems';
import tutorialsCarouselItems from '../assets/data/tutorialsCarouselItems';

interface IndexPageState {
  isDesktop: boolean;
}

const checkIsDesktop = () => window.innerWidth >= 768;

class IndexPage extends React.Component<any, IndexPageState> {
  constructor(props: any) {
    super(props);

    this.isDesktopVersion = this.isDesktopVersion.bind(this);
    this.state = {
      isDesktop: checkIsDesktop(),
    };
  }

  isDesktopVersion() {
    console.log(`innerWidth is : ${window.innerWidth}`);
    if (window.innerWidth >= 768) this.setState({ isDesktop: true });
  }

  render() {
    const { isDesktop } = this.state;
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
              />
            </div>
            <div className={styles.section3}>
              <RealityCaptureTypesGallery />
            </div>
            <div className={styles.section4_youtubeMovie}>
              <ReactPlayer
                className={styles.reactPlayer}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="50%"
                controls="true"
              />
            </div>
          </div>
          <div className={styles.section5_scanToBim}>
            <ScanToBim />
          </div>
          <div className={styles.section6_tutorials}>
            <Tutorials dataFromJson={tutorialsCarouselItems} />
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
