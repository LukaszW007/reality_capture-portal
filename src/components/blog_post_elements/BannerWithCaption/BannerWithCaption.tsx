// global dependencies
import React from 'react';

// local dependencies
import styles from './BannerWithCaption.module.scss';

interface BannerProps {
  detailsData: Record<string, any>;
}

const BannerWithCaption: React.FC<BannerProps> = props => {
  const { detailsData } = props;
  const { url, alt, copyright: caption } = detailsData;
  // console.log(`BannerWithCaption> ${JSON.stringify(detailsData)}`);
  if (url === undefined || alt === undefined || caption === undefined) {
    // console.error('Image details retrieved from CMS are undefined');
    // console.table(detailsData);
    return null;
  }
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.bannerImage} src={url} alt={alt} title={alt} loading="lazy"/>
      <figcaption className={styles.figcaption}>Fot. {caption}</figcaption>
    </div>
  );
};

export default BannerWithCaption;
