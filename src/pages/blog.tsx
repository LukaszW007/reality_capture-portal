import react from 'react';

import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './blog.module.scss';

class Blog extends React.Component<any, any> {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
        <SEO title="Blog" />
        <Layout>
          <h1> empty blog</h1>
        </Layout>
      </>
    )
  }
}
