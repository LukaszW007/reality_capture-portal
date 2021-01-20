import React from 'react';
import { RichText } from 'prismic-reactjs';

import { graphql, Link } from 'gatsby';
import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './blog.module.scss';

const BlogPostsList: React.FC<any> = ({ data: queryData }) => {
  const posts = queryData.allPrismicBlogPosts.edges;
  const pageData = queryData.prismicListofblogs.data;
  const image = pageData.main_image.url;
  const imageAltText = pageData.main_image.alt;
  const postsTotalCount = posts.totalCount;
  // const unionType = () => {
  //   queryData.allPrismicBlogPost.edges.map((article, index) => (
  //     <h1 key={index}>{RichText.render(article.node.data.body.id)}</h1>
  //   ));
  // };
  return (
    <Layout>
      <SEO title="Posts" description="Page contains a list of all the posts" />
      <section className={styles.sectionContainer}>
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
    allPrismicBlogPost(filter: { uid: { eq: "leicartc360" } }) {
      edges {
        node {
          data {
            body {
              ... on PrismicBlogPostBodyText {
                id
                primary {
                  text {
                    text
                    raw
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// https://sketchfab.com/oembed?url=https://sketchfab.com/models/b2f0baeb0cb8414ab675d894468a7436/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1

// <div className="sketchfab-embed-wrapper">
//     <iframe title="A 3D model" width="640" height="480"
//             src="https://sketchfab.com/models/b2f0baeb0cb8414ab675d894468a7436/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
//             frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
//             webkitallowfullscreen="true"></iframe>
//     <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
//         <a
//           href="https://sketchfab.com/3d-models/stylized-house-b2f0baeb0cb8414ab675d894468a7436?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
//           target="_blank" style="font-weight: bold; color: #1CAAD9;">Stylized house</a>
//         by <a href="https://sketchfab.com/Tatiana_Lytvyn?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
//               target="_blank" style="font-weight: bold; color: #1CAAD9;">Tatiana_Lytvyn</a>
//         on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank"
//               style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
//     </p>
// </div>
