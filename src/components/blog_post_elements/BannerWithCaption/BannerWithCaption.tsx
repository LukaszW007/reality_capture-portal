// global dependencies
import React from 'react';

// local dependencies
import styles from './BannerWithCaption.module.scss';

interface BannerProps {
  detailsData: Record<string, never>;
}

const BannerWithCaption: React.FC<BannerProps> = props => {
  const { detailsData } = props;
  const { url, alt, copyright: caption } = detailsData;
  if (url === undefined || alt === undefined || caption === undefined) {
    console.error('Image details retrieved from CMS are undefined');
    console.table(detailsData);
    return null;
  }
  return (
    <>
      <img className={styles.bannerImage} src={url} alt={alt} />
      <figcaption className={styles.figcaption}>Fot. {caption}</figcaption>
    </>
  );
};

export default BannerWithCaption;
