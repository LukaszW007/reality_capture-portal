// global dependencies
import React from 'react';

// local dependencies
import styles from './Embed.module.scss';

interface EmbedProps {
  detailsData: Record<string, never>;
}
const Embed: React.FC<EmbedProps> = props => {
  const { detailsData } = props;
  const { text: embeddedLink } = detailsData[0];
  return (
    <>
      <div
        className={styles.embeddedLink}
        dangerouslySetInnerHTML={{ __html: embeddedLink }}
      />
    </>
  );
};

export default Embed;
