// global dependencies
import React from 'react';

// local dependencies
import { graphql, Link } from 'gatsby';
import styles from './SinglePostOnPostsList.module.scss';

interface PropsSinglePost {
  singlePostData: Record<string, any>;
}

const SinglePostOnPostsList: React.FC<PropsSinglePost> = props => {
  const { singlePostData } = props;

  return (
    <Link to={singlePostData.url}>
      <li className={styles.oneOfPosts} key={singlePostData.url}>
        <div className={styles.descriptionOfPost}>
          <p className={styles.titleName}>{singlePostData.postTitle}</p>
          <span className={styles.postFirstPublicationDate}>{singlePostData.date}</span>
        </div>
        <img className={styles.postThumbnail} src={singlePostData.imageURL} alt={singlePostData.imageAlt} />
      </li>
    </Link>
  );
};

export default SinglePostOnPostsList;
