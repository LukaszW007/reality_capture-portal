// global dependencies
import React from 'react';

// local dependencies
import styles from './ScanToBim.module.scss';

const scanToBim: React.FC<any> = props => {
  return (
    <>
      <div className={styles.sectionHeader}>scan-to-bim</div>
      <div className={styles.content}>
        <div className={styles.underConstruction} />
      </div>
    </>
  );
};

export default scanToBim;
