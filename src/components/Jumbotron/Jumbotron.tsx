// global dependencies
import React from 'react';

// local dependencies
import styles from './Jumbotron.module.scss';
import YoutubeSideLink from './YoutubeSideLink';

interface PropsJumbotron {
  isApple: any;
  desktopScreenVersion: boolean;
}

const Jumbotron: React.FC<PropsJumbotron> = ({
  isApple,
  desktopScreenVersion,
}) => {
  const { isMac, isIos } = isApple;
  const urlFB = 'https://www.facebook.com/3d-pointscom-115265793599938';
  const urlYT = 'https://www.youtube.com/channel/UCdggRvOCAmmarbeDny-bDRA';

  console.log(`MAcoOs ${isIos} ${isMac}`);
  return (
    <div className={isIos || isMac ? styles.JumbotronIos : styles.Jumbotron}>
      <div className={styles.Headers}>
        <h1 className={styles.header1}>reality capture</h1>
        <div className={styles.header3}>
          Transform reality into virtual 3D world
        </div>
      </div>
      <div
        className={
          desktopScreenVersion ? styles.YoutubeSide : styles.YoutubeSideNone
        }
      >
        <div className={styles.linksGroup}>
          <YoutubeSideLink url={urlFB} name="Facebook" />
          <YoutubeSideLink url={urlYT} name="Youtube" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
