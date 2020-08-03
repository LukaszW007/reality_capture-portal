import React from 'react';

import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './404.module.scss';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <h1 className={styles.header}>404 NOT FOUND</h1>
      <p className={styles.textDescription}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Layout>
  </>
);

export default NotFoundPage;
