// global dependencies
import React from 'react';

// local dependencies
import styles from './Tutorials.module.scss';
import videoRollIcon from '../../../assets/SVG/video_roll.svg';
import Carousel from '../../../components/Carousel';
// import realityCaptureCarouselItems from '../../../assets/data/realityCaptureCarouselItems';

interface TutorialProps {
  // enableDescription: boolean;
  // enableTextIndicators: boolean;
  // enableDotIndicators: boolean;
  // items: object;
  dataFromJson: any;
}

const Tutorials: React.FC<TutorialProps> = props => {
  const { dataFromJson } = props;
  const {
    enableDescription,
    enableTextIndicators,
    enableDotIndicators,
    items,
  } = dataFromJson;
  return (
    <div className={styles.sectionsBackground}>
      <div className={styles.sectionHeader}>tutorials</div>
      <div className={styles.sectionIcon}>
        <img src={videoRollIcon} alt="video_roll_icon" />
      </div>
      <Carousel
        enableDescription={enableDescription}
        enableTextIndicators={enableTextIndicators}
        enableDotIndicators={enableDotIndicators}
        items={items}
      />
    </div>
  );
};

export default Tutorials;
