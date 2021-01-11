import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/gatsby_elements/layout';

const PostsPage: React.FC<any> = ({ data }) => {
  const { data: postData, first_publication_date: date } = data.prismicBlogPosts;
  const title = postData.title[0].text;
  const content = postData.text_of_the_post.text;
  const image = postData.main_image;
  return (
    <Layout>
      <SEO title={title} />
      <section>
        <img src={image.url} alt={image.alt} /> <h1>{title}</h1>
        <div>{date}</div>
        <article>
          <div>{content}</div>
        </article>
      </section>
    </Layout>
  );
};

export default PostsPage;

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    # Query the post with the uid passed in from gatsby-node.js
    prismicBlogPosts(uid: { eq: $uid }) {
      uid
      first_publication_date(formatString: "DD MMMM YYYY")
      data {
        title {
          text
          type
        }
        text_of_the_post {
          text
        }
        main_image {
          alt
          url
        }
      }
    }
  }
`;
