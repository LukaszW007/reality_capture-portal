// global dependencies
import React from 'react';

// local dependencies
import styles from './PictRightColumn.module.scss';
import BannerWithCaption from '../BannerWithCaption';

interface PropsPRC {
  detailsData: Record<string, any>;
}

const PictRightColumn: React.FC<PropsPRC> = props => {
  const { detailsData } = props;
  const { items } = detailsData;
  const pictDetails = {
    url: items[0].right_side_pict.url,
    alt: items[0].right_side_pict.alt,
    copyright: items[0].right_side_pict.alt,
  };

  return (
    <div className={styles.prcContainer}>
      <p
        className={styles.paragraph}
        dangerouslySetInnerHTML={{ __html: items[0].left_side_text[0].text }}
      />
      <BannerWithCaption detailsData={pictDetails} />
    </div>
  );
};

export default PictRightColumn;
