// global dependencies
import React from 'react';

// local dependencies
import styles from './Tutorials.module.scss';
import videoRollIcon from '../../../assets/SVG/video_roll.svg';
import Carousel from '../../../components/Carousel';

const tutorials: React.FC<any> = props => {
  return (
    <div className={styles.sectionsBackground}>
      <div className={styles.sectionHeader}>tutorials</div>
      <div className={styles.sectionIcon}>
        <img src={videoRollIcon} alt="video_roll_icon" />
      </div>
      <Carousel />
    </div>
  );
};

export default tutorials;
