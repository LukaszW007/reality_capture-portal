// global dependencies
import React from 'react';

// local dependencies
// import heroImage from 'assets/images/top-view-desk-wood-and-coffee.png';
import styles from './YoutubeSideLink.module.scss';

const YoutubeSideLink = () => {
  return (
    <>
      <span className={styles.SideLink}>
        <a className={styles.YoutubeSideLink} href="www.youtube.pl">
          Youtube
        </a>
      </span>
    </>
  );
};

export default YoutubeSideLink;
