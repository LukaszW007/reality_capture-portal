// global dependencies
import React, { useState } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

// local dependencies
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './PostCard.module.scss';
// import blogPost from "../../pages/blogPost"

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

function ToText(node: string) {
  const tag = document.createElement('div');
  tag.innerHTML = node;
  const nodeReturned = tag.innerText;
  return nodeReturned;
}

const PostCard: React.FC<any> = props => {
  console.log('PostCard props: ', props);
  const { item, profileInfo } = props;
  const { thumbnail, title, author, description, pubDate } = item;

  const { profileURL, avatar, profileTitle } = profileInfo;

  let postUid = title
    .replace(/[.,'"/!$%^&*;:{}=\-_`~()?\s+]/g, '-')
    .replace(/[#’]/g, '');
  if (postUid.slice(-1) === '-') {
    postUid = postUid.slice(0, -1);
  }

  const singlePostUrl = `/posts/${postUid}`; //TODO link nie dziala

  // console.log('postUID from PostCard ', postUid);
  // console.log('singlePostUrl from PostCard ', singlePostUrl);

  return (
    <div className={styles.grid}>
      <div className={styles.cardSmall}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className={styles.authorImg}>
            <a
              href={undefined}
              // rel="noopener noreferrer"
              // target="_blank"
              style={{ backgroundImage: `url(${avatar})` }}
            >
              Written By {author}
            </a>
          </div>
        </div>

        <div className={styles.cardDescription}>
          <h5 className={styles.cardTitle}>
            <Link to={singlePostUrl} state={{ data: props }} className={styles.titleName}>
              {title}
            </Link>
          </h5>

          <p className={styles.cardText}>{`${ToText(
            description.substring(
              description.indexOf('<p>') + 3,
              description.indexOf('<p>') + 130
            )
          )}...`}</p>

          <div className={styles.author}>
            <FontAwesomeIcon className={styles.iconAuthor} icon={faUser} />
            <div className={styles.authorName}>{author}</div>
          </div>
          <div className={styles.author}>
            <FontAwesomeIcon
              className={styles.iconAuthor}
              icon={faCalendarAlt}
            />
            {moment(pubDate).format('MMM DD, YYYY')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
