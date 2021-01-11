import React from 'react';

import { graphql, Link } from 'gatsby';
import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './blog.module.scss';

const BlogPostsList: React.FC<any> = ({ data: queryData }) => {
  const posts = queryData.allPrismicBlogPosts.edges;
  const pageData = queryData.prismicListofblogs.data;
  const image = pageData.main_image.url;
  const imageAltText = pageData.main_image.alt;
  return (
    <Layout>
      <SEO title="Posts" description="Page contains a list of all the posts" />
      <section className={styles.sectionContainer}>
        <div className={styles.blogHeader}>
          <h1 className={styles.headerTitle}>{pageData.blogs_title[0].text}</h1>
          <img className={styles.headerImage} src={image} alt={imageAltText} />
        </div>
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
                <Link to={url}>
                  <li className={styles.oneOfPosts} key={index}>
                    <div className={styles.descriptionOfPost}>
                      <p className={styles.titleName}>{postTitle}</p>
                      <span className={styles.postFirstPublicationDate}>
                        {date}
                      </span>
                    </div>
                    <img
                      className={styles.postThumbnail}
                      src={imageURL}
                      alt={imageAlt}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPostsList;

export const listofblogsQuery = graphql`
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
  }
`;
