// global dependencies
import React from 'react';
import { isIOS } from 'react-device-detect';

// local dependencies
// import heroImage from 'assets/images/top-view-desk-wood-and-coffee.png';
import styles from './Jumbotron.module.scss';
import YoutubeSideLink from './YoutubeSideLink';

const Jumbotron = () => {
  return (
    <div className={isIOS ? styles.JumbotronIos : styles.Jumbotron}>
      <div className={styles.Headers}>
        <h1 className={styles.header1}>reality capture</h1>
        <div className={styles.header3}>
          Transform reality into virtual 3D world
        </div>
      </div>
      <div className={styles.YoutubeSide}>
        <YoutubeSideLink />
      </div>
    </div>
  );
};

export default Jumbotron;
