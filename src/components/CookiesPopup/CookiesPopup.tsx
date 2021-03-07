// global dependencies
import React, { useState } from 'react';
import { Link } from 'gatsby';

// local dependencies
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styles from './CookiesPopup.module.scss';
import cookiesContent from '../../assets/data/cookies';

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

const CookiesPopup: React.FC<any> = () => {
  const [isClosed, setIsClosed] = useState<number>(0);
  const { content, buttonTitle } = cookiesContent;

  return (
    <div className={isClosed === 1 ? styles.containerClosed : styles.container}>
      <div className={styles.contentGroup}>
        <div className={styles.content}>{content}</div>
        <Link
          to="/privacyPolicyPage"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonTitle}
        </Link>
      </div>
      <button
        type="button"
        className={styles.closeButton}
        onClick={() => setIsClosed(1)}
      >
        X
      </button>
    </div>
  );
};

export default CookiesPopup;
