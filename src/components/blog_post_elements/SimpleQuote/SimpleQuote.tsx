// global dependencies
import React from 'react';

// local dependencies
import styles from './SimpleQuote.module.scss';

interface PropsSimpleQuote {
  detailsData: Record<string, never>;
}

const SimpleQuote: React.FC<PropsSimpleQuote> = props => {
  const { detailsData } = props;
  const { text } = detailsData[0];
  return (
    <>
      <div className={styles.BlockQuote}>
       <div className={styles.SimpleQuote}>{text}</div>
      </div>
    </>
  );
};

export default SimpleQuote;
