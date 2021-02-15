import React from 'react';

import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './404.module.scss';
import pointCloud from '../assets/images/Filipstad point cloud.png';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <div className={styles.container404}>
        <div className={styles.graphic404}>
          <h1 className={styles.header}>404 NOT FOUND</h1>
          <img
            src={pointCloud}
            className={styles.gif}
            alt="A point cloud"
            title="Oslo harbor"
          />
        </div>
        <div className={styles.textDescription}>
          You can go back to:
          <p>
            1. Main website:{' '}
            <a href="https://3d-points.com" className={styles.link}>
              https://3d-points.com
            </a>
          </p>
          <p>
            2. Blog website:{' '}
            <a href="https://3d-points.com/blog" className={styles.link}>
              https://3d-points.com/blog
            </a>
          </p>
        </div>
      </div>
    </Layout>
  </>
);

export default NotFoundPage;
