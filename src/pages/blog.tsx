// global dependencies
import React from 'react';

// local dependencies
import { graphql, Link } from 'gatsby';
import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './blog.module.scss';
import SinglePostOnPostsList from '../components/SinglePostOnPostsList';

const BlogPostsList: React.FC<any> = ({ data: queryData }) => {
  const posts = queryData.allPrismicBlogPosts.edges;
  const pageData = queryData.prismicListofblogs.data;
  const image = pageData.main_image.url;
  const imageAltText = pageData.main_image.alt;
  const postsTotalCount = posts.totalCount;

  return (
    <Layout>
      <SEO
        title="List of blog posts·3d-points.com"
        description="Page contains a list of the posts of the blog about reality capturing"
        pathname="/blog"
      />
      <section
        className={styles.sectionContainer}
        onContextMenu={e => e.preventDefault()}
      >
        <div className={styles.blogHeader}>
          <h1 className={styles.headerTitle}>{pageData.blogs_title[0].text}</h1>
          <img className={styles.headerImage} src={image} alt={imageAltText} />
        </div>
        <div className={styles.postsCounter}>{postsTotalCount}</div>
        <div className={styles.underHeading}>
          <ul className={styles.listOfPosts}>
            {posts.map((post, index) => {
              const {
                data: postData,
                first_publication_date: date,
                uid,
              } = post.node;
              const postTitle = postData.title[0].text;
              const imageURL = postData.main_image.url;
              const imageAlt = postData.main_image.alt;
              const url = `/posts/${uid}`;
              return (
                <SinglePostOnPostsList
                  key={url}
                  singlePostData={{
                    postTitle,
                    imageAlt,
                    imageURL,
                    url,
                    date,
                  }}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPostsList;

export const listOfBlogsQuery = graphql`
  query listofblogsQuery {
    prismicListofblogs {
      data {
        blogs_title {
          text
        }
        main_image {
          url
          alt
        }
      }
    }
    allPrismicBlogPosts(
      sort: { fields: [last_publication_date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          uid
          first_publication_date(formatString: "DD MMMM YYYY")
          data {
            title {
              text
            }
            main_image {
              alt
              url
            }
          }
        }
      }
    }
    #    allPrismicBlogPost(filter: { uid: { eq: "leicartc360" } }) {
    #      edges {
    #        node {
    #          data {
    #            body {
    #              ... on PrismicBlogPostBodyText {
    #                id
    #                primary {
    #                  rich_text_in_post {
    #                    text
    #                    raw
    #                    html
    #                  }
    #                }
    #              }
    #            }
    #          }
    #        }
    #      }
    #    }
  }
`;
