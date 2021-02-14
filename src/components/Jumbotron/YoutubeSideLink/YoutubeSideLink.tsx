// global dependencies
import React from 'react';

// local dependencies
// import heroImage from 'assets/images/top-view-desk-wood-and-coffee.png';
import styles from './YoutubeSideLink.module.scss';

const YoutubeSideLink = () => {
  return (
    <>
      <span className={styles.SideLink}>
        <a
          className={styles.YoutubeSideLink}
          href="https://www.youtube.com/channel/UCdggRvOCAmmarbeDny-bDRA"
          target="_blank"
        >
          Youtube
        </a>
      </span>
    </>
  );
};

export default YoutubeSideLink;
