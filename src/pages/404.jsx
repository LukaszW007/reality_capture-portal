import React from 'react';

import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './404.module.scss';

const NotFoundPage = () => (
  <div className={styles.container404}>
    <SEO title="404: Not found" />
    <Layout>
      <div className={styles.graphic404}>
        <h1 className={styles.header}>404 NOT FOUND</h1>
        <a href="https://j.gifs.com/yEDnkO.gif">A point cloud</a>
      </div>
      <p className={styles.textDescription}>
        You can go back to:
        <br /> 1. Main website: <a href="3d-points.com">3d-points.com</a>
        <br /> 2. Blog website:{' '}
        <a href="3d-points.com/blog">3d-points.com/blog</a>
      </p>
    </Layout>
  </div>
);

export default NotFoundPage;
