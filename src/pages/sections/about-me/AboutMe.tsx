// global dependencies
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// local dependencies
import styles from './AboutMe.module.scss';
import authorPicture from '../../../assets/images/author-dots-opt.webp';
import authorPicturePng from '../../../assets/images/author-dots-opt.png';

interface PropsAboutMe {
  isApple: any;
}

const AboutMe: React.FC<PropsAboutMe> = ({ isApple }) => {
  console.log(`isApple from aboutMe JSON: ${JSON.stringify(isApple)}`);
  if (isApple) {
    const { isMac, isIos } = isApple;

    return (
      <div className={styles.aboutMeContainer}>
        <div className={styles.sectionHeaderAboutMe}>about author</div>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              I am Lukasz and I am author of this page. I am geomatics engineer
              and software developer. Enthusiast of new technologies. I would
              like to share my knowledge about <strong>laser scanning</strong>{' '}
              and <strong>scan-to-BIM</strong> modeling with{' '}
              <strong>You</strong>. I &nbsp;hope you will find interesting you
              information and you will use them in your daily workflow.
            </p>
            <p>
              I am recording short videos and longer tutorials on my{' '}
              <OutboundLink
                className={styles.linkYT}
                href="https://www.youtube.com/channel/UCdggRvOCAmmarbeDny-bDRA"
              >
                Youtube{' '}
              </OutboundLink>
              channel. You are very welcome to watch them and share.
            </p>
            <p>
              I also write articles and reviews of laser scanning equipment and
              software. It would be wonderful if you would find there some
              decent information.
            </p>
            <p>
              Professionally I work with the point clouds, 3D modeling, and
              web-development.
            </p>
            <p>Would you like know more about me and my projects?</p>
            <p>
              Contact me by e-mail <br />
            </p>
            <p>
              <OutboundLink
                className={styles.contactLink}
                href="mailto:3d-points.contact@gmail.com"
              >
                3d-points.contact@gmail.com
              </OutboundLink>
            </p>
            {/* <Link to="/page-2"> */}
            {/*  <div>...continue to read here.</div> */}
            {/* </Link> */}
          </div>
          <div className={styles.picture}>
            <img
              src={isIos || isMac ? authorPicturePng : authorPicture}
              alt="Author"
              title="Author"
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default AboutMe;
