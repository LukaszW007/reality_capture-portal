import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/gatsby_elements/layout';
import styles from './blogPost.module.scss';
import BannerWithCaption from '../components/blog_post_elements/BannerWithCaption';
import Embed from '../components/blog_post_elements/Embed';
import RichText from '../components/blog_post_elements/RichText';
// import SimpleQuote from '../components/blog_post_elements/SimpleQuote';
// import PictRightColumn from '../components/blog_post_elements/PictRightColumn';
// import PictLeftColumn from '../components/blog_post_elements/PictLeftColumn';
import ListOfArticles from '../components/blog_post_elements/ListOfArticles';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';

const PostsPage: React.FC<any> = ({ data }) => {
  console.table(`DATA in PostPage: ${JSON.stringify(data)}`);
  if (data !== undefined) {
    const {
      data: postData,
      first_publication_date: firstPublicationDate,
      url,
    } = data.prismicPosts;
    const { body } = data.prismicPosts.data;
    const articlesData = data.allPrismicPosts.edges;
    console.log(`data.allPrismicPosts  : ${JSON.stringify(articlesData)}`);

    // variables from prismicPosts
    const title = postData.title[0].text;
    // if (postData.subtitle[0].text !== undefined)
    const subtitle =
      postData.subtitle[0] === undefined ? '' : postData.subtitle[0].text;
    const hashtagsArray = postData.hashtags ? postData.hashtags.split(',') : [];
    const firstParagraph =
      postData.text_of_the_post[0] === undefined
        ? ''
        : postData.text_of_the_post[0].text;
    const image = postData.main_image;
    const readTime = postData.read_time[0].text;

    // variables from data.prismicPosts.data.body
    const sliceTypes = body.map((sliceType: any, index: string) => {
      switch (sliceType.slice_type) {
        case 'banner_with_caption':
          return (
            <BannerWithCaption detailsData={sliceType.primary.image_banner} />
          );
        case 'embed':
          return <Embed detailsData={sliceType.primary.link_to_iframe} />;
        case 'text':
          return <RichText detailsData={sliceType.primary.rich_text_in_post} />;
        // case 'quote':
        //   return <SimpleQuote detailsData={sliceType.primary.quote} />;
        // case 'pictright_text_columns':
        //   return <PictRightColumn detailsData={sliceType} />;
        // case 'pictleft_text_columns':
        //   return <PictLeftColumn detailsData={sliceType} />;
        case 'list_of_articles':
          return (
            <ListOfArticles
              detailsData={sliceType}
              articlesData={articlesData}
            />
          );
        default:
          console.table(`this is slicetype: ${JSON.stringify(sliceType)}`);
      }
      return null;
    });

    return (
      <Layout>
        <SEO title={title} description={subtitle} pathname={url} />
        <ScrollIndicator />
        <section
          className={styles.sectionContainer}

        >
          <img className={styles.mainImage} src={image.url} alt={image.alt} />
          <figcaption className={styles.figcaption}>
            Fot. {image.copyright}
          </figcaption>
          <div className={styles.postContentContainer}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <div>{readTime}</div>
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
  }
  return null;
};

export default PostsPage;

export const blogPostQuery = graphql`
  query PostBySlug($uid: String!) {
    # Query the post with the uid passed in from gatsby-node.js
    prismicPosts(uid: { eq: $uid }) {
      url
      uid
      first_publication_date(formatString: "DD MMMM YYYY")
      data {
        title {
          text
        }
        text_of_the_post {
          text
        }
        read_time {
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
            image_banner {
              alt
              url
              copyright
            }
          }
          items {
            articles_to_link {
              uid
            }
          }
        }
      }
    }
    allPrismicPosts {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            main_image {
              url
              alt
              copyright
            }
          }
        }
      }
    }
  }
`;
