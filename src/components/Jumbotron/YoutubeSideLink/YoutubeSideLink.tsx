// global dependencies
import React from 'react';

// local dependencies
// import heroImage from 'assets/images/top-view-desk-wood-and-coffee.png';
import styles from './YoutubeSideLink.module.scss';

const YoutubeSideLink = (props: { url: string; name: string }) => {
  const { url, name } = props;
  return (
    <>
      <div
        className={
          name === 'Facebook' ? styles.SideLinkFacebook : styles.SideLinkYoutube
        }
      >
        <a
          className={styles.YoutubeSideLink}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
    </>
  );
};

export default YoutubeSideLink;
