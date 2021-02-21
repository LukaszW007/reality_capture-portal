// global dependencies
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
        <OutboundLink
          className={styles.YoutubeSideLink}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </OutboundLink>
      </div>
    </>
  );
};

export default YoutubeSideLink;
