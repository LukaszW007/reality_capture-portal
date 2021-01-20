import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/gatsby_elements/layout';
import styles from './blogPost.module.scss';
import BannerWithCaption from '../components/blog_post_elements/BannerWithCaption';
import Embed from '../components/blog_post_elements/Embed';

const PostsPage: React.FC<any> = ({ data }) => {
  const {
    data: postData,
    first_publication_date: firstPublicationDate,
  } = data.prismicBlogPosts;
  const { body } = data.prismicBlogPosts.data;

  // variables from prismicBlogPosts
  const title = postData.title[0].text;
  const subtitle = postData.subtitle[0].text;
  const hashtagsArray = postData.hashtags.split(',');
  const firstParagraph = postData.text_of_the_post[0].text;
  const image = postData.main_image;

  // variables from data.prismicBlogPosts.data.body
  const sliceTypes = body.map((sliceType, index) => {
    switch (sliceType.slice_type) {
      case 'banner_with_caption': {
        return (
          <BannerWithCaption detailsData={sliceType.primary.image_banner} />
        );
      }break;
      case 'embed': {
        return (
           <Embed detailsData={sliceType.primary.link_to_iframe} />
        )
      }break;
      default:
        console.table(`this is slicetype: ${JSON.stringify(sliceType)}`);
    }
  });

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.sectionContainer}>
        <img className={styles.mainImage} src={image.url} alt={image.alt} />
        <figcaption className={styles.figcaption}>
          Fot. {image.copyright}
        </figcaption>
        <div className={styles.postContentContainer}>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <div className={styles.firstPublicationDate}>
            {firstPublicationDate}
          </div>
          <ul className={styles.hashtags}>
            {hashtagsArray.map((hashtag: string, index: string) => (
              <li className={styles.singleHashtag} key={index}>
                {hashtag}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.sectionContainer2}>
        <p className={styles.firstParagraph}>{firstParagraph}</p>
        {sliceTypes}
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
        }
        text_of_the_post {
          text
        }
        main_image {
          alt
          url
          copyright
        }
        hashtags
        subtitle {
          text
        }
        body {
          slice_type
          primary {
            rich_text_in_post {
              text
              type
            }
            link_to_iframe {
              text
            }
            list_of_articles {
              text
            }
            quote {
              text
            }
            image_banner {
              alt
              url
              copyright
            }
          }
          items {
            articles_to_link {
              id
              uid
            }
            left_side_pict {
              alt
              url
            }
            right_side_text {
              text
              type
            }
          }
        }
      }
    }
  }
`;
