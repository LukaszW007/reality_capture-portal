// global dependencies
import React from 'react';

// local dependencies
import styles from './Jumbotron.module.scss';
import YoutubeSideLink from './YoutubeSideLink';

interface PropsJumbotron {
  isApple: any;
}

const Jumbotron: React.FC<PropsJumbotron> = ({ isApple }) => {
  const { isMac, isIos } = isApple;

  console.log(`MAcoOs ${isIos} ${isMac}`);
  return (
    <div className={isIos || isMac ? styles.JumbotronIos : styles.Jumbotron}>
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
