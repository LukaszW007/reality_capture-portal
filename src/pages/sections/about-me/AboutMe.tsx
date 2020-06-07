// global dependencies
import React from 'react';

// local dependencies
import styles from './AboutMe.module.scss';

const AboutMe: React.FC<any> = props => {
  return (
    <>
      <div className={styles.sectionHeader}>about author</div>
      <div className={styles.content}>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquam animi consequatur corporis, deserunt esse est eum id incidunt
          maxime mollitia necessitatibus neque nisi non nulla possimus quis
          saepe suscipit.
        </div>
        <div className={styles.picture} />
      </div>
    </>
  );
};

export default AboutMe;
