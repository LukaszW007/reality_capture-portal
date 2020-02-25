// global dependencies
import React from 'react';

// local dependencies
// import heroImage from 'assets/images/top-view-desk-wood-and-coffee.png';
import styles from './Jumbotron.module.scss';
import YoutubeSideLink from './YoutubeSideLink';

const Jumbotron = () => {
  return (
    <div className={styles.Jumbotron}>
      <div className={styles.Headers}>
        <h1>reality capture</h1>
        <h3>Transform reality into virtual 3D world</h3>
      </div>
      <div className={styles.YoutubeSide}>
        <YoutubeSideLink />
      </div>
    </div>
  );
};

export default Jumbotron;
