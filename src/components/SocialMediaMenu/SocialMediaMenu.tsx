// global dependencies
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// local dependencies
import styles from './SocialMediaMenu.module.scss';
import iconIG from '../../assets/SVG/instagram-brands.svg';
import iconYT from '../../assets/SVG/youtube-brands.svg';
import iconFB from '../../assets/SVG/facebook-brands.svg';

const SocialMediaMenu: React.FC<any> = () => {
  const urlFB = 'https://www.facebook.com/3d-pointscom-115265793599938';
  const urlYT = 'https://www.youtube.com/channel/UCdggRvOCAmmarbeDny-bDRA';
  const urlIG = 'https://www.instagram.com/3d.points/';

  return (
    <div className={styles.socialIconsMenu}>
      <ul className={styles.socialIcons}>
        <li>
          <OutboundLink
            href={urlFB}
            className={styles.socialIcon}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={iconFB}
              alt="facebook icon"
              title="FB"
              className={styles.facebook}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            href={urlYT}
            className={styles.socialIcon}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={iconYT}
              alt="youtube icon"
              title="YT"
              className={styles.youtube}
            />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            href={urlIG}
            className={styles.socialIcon}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={iconIG}
              alt="instagram icon"
              title="IG"
              className={styles.instagram}
            />
          </OutboundLink>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaMenu;
