// global dependencies
import React from 'react';

// local dependencies
import styles from './Tutorials.module.scss';
import videoRollIcon from '../../../assets/SVG/video_roll.svg';
import Carousel from '../../../components/Carousel';
import tutorialsCarouselItems from '../../../assets/data/tutorialsCarouselItems';

interface TutorialProps {
  dataFromJson: any;
  desktopScreenVersion: boolean;
}

const Tutorials: React.FC<TutorialProps> = props => {
  if (props === undefined || props === null) {
    return null;
  }
  const { dataFromJson, desktopScreenVersion } = props;
  // const {
  //   enableDescription,
  //   enableTextIndicators,
  //   enableDotIndicators,
  //   items,
  // } = dataFromJson;
  // console.log(`enableDesc: ${enableDescription}`);

  return (
    <div className={styles.sectionsBackground}>
      <div className={styles.sectionHeader}>tutorials</div>
      <div className={styles.sectionIcon}>
        <img src={videoRollIcon} alt="video_roll_icon" />
      </div>
      <Carousel
        enableDescription={tutorialsCarouselItems.enableDescription}
        enableTextIndicators={tutorialsCarouselItems.enableTextIndicators}
        enableDotIndicators={tutorialsCarouselItems.enableDotIndicators}
        items={tutorialsCarouselItems.items}
        desktopScreenVersion={desktopScreenVersion}
      />
    </div>
  );
};

export default Tutorials;
