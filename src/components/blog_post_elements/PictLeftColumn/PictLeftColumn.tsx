import React from 'react';

// local dependencies
import styles from './PictLeftColumn.module.scss';
import BannerWithCaption from '../BannerWithCaption';

interface PropsPRC {
  detailsData: Record<string, any>;
}

const PictLeftColumn: React.FC<PropsPRC> = props => {
  const { detailsData } = props;
  const { items } = detailsData;
  const pictDetails = {
    url: items[0].left_side_pict.url,
    alt: items[0].left_side_pict.alt,
    copyright: items[0].left_side_pict.alt,
  };

  return (
    <div className={styles.prcContainer}>
      <BannerWithCaption detailsData={pictDetails} />
      <p
        className={styles.paragraph}
        dangerouslySetInnerHTML={{ __html: items[0].right_side_text[0].text }}
      />
    </div>
  );
};

export default PictLeftColumn;
