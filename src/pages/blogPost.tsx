import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { graphql, Link } from 'gatsby';

import moment from 'moment';
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
  const [rssData, setRssData] = useState([]);

  if (data !== undefined) {
    const {
      categories,
      content,
      guid,
      id,
      link,
      pubDate,
      title,
    } = data.feedMediumBlog;

    // console.log('data.feedMediumBlog: ', data.feedMediumBlog);

    const mediumURL =
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@3d-points';

    const fetchRssData = () => {
      Axios.get(mediumURL)
        .then(axiosData => {
          let imageUrl;
          let axiosTitle;
          axiosData.data.items.map((singleItem, index) => {
            if (singleItem.title === title) {
              imageUrl = singleItem.thumbnail;
              axiosTitle = singleItem.title
                .replace(/[.,'"/!$%^&*;:{}=\-_`~()?\s+]/g, '-')
                .replace(/[#’]/g, '');
              if (axiosTitle.slice(-1) === '-') {
                axiosTitle = axiosTitle.slice(0, -1);
              }
              // console.log('thumbnail ',imageUrl)
              setRssData([imageUrl, axiosTitle]);
            }
          });
        })
        .catch(e => {
          console.error(e);
        });
    };

    useEffect(() => {
      fetchRssData();
    }, []);

    // console.log('RssData from axios: ', rssData);
    // console.log('Pochodzi z PROPS: ', title);
    // console.log('Pochodzi z rss: ', rssData[1]);

    // const imageUrl = rssData[1] === title ? rssData[0] : null;

    return (
      <Layout>
        <SEO
          title={rssData[1]}
          description={content.encodedSnippet.substring(0, 150)}
          pathname={title}
          image={rssData[0]}
        />
        <ScrollIndicator />
        <section className={styles.sectionContainer}>
          <div className={styles.postContentContainer}>
            <h1>{title}</h1>
            <div className={styles.firstPublicationDate}>
              {moment(pubDate).format('MMM DD, YYYY')}
            </div>
            <ul className={styles.hashtags}>
              {categories.map((hashtag, index) => {
                return (
                  <li key={index} className={styles.singleHashtag}>
                    #{hashtag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content.encoded }}
          />
          {/* </section> */}
          {/* <section className={styles.sectionContainer2}> */}
          {/*  <p className={styles.firstParagraph}>{firstParagraph}</p> */}
          {/*  {sliceTypes} */}
        </section>
      </Layout>
    );
  }
  return null;
};

export default PostsPage;

export const blogPostQuery = graphql`
  query PostById($id: String!) {
    # Query the post with the id passed in from gatsby-node.js
    feedMediumBlog(id: { eq: $id }) {
      categories
      content {
        encoded
        encodedSnippet
      }
      guid
      id
      link
      pubDate
      title
    }
  }
`;

// This is code for a data from Prismistyles.io

/* const PostsPage: React.FC<any> = ({ data }) => {
  // console.table(`DATA in PostPage: ${JSON.stringify(data)}`);
  if (data !== undefined) {
    const {
      data: postData,
      first_publication_date: firstPublicationDate,
      url,
    } = data.prismicPosts;
    const { body } = data.prismicPosts.data;
    const articlesData = data.allPrismicPosts.edges;
    // console.log(`data.allPrismicPosts  : ${JSON.stringify(articlesData)}`);

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
          // console.table(`this is slicetype: ${JSON.stringify(sliceType)}`);
      }
      return null;
    });
    console.log('URL for Pathname: ', url);

    return (
      <Layout>
        <SEO
          title={title}
          description={subtitle}
          pathname={url}
          image={image.url}
        />
        <ScrollIndicator />
        <section className={styles.sectionContainer}>
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

// This is the code when uses RSS api RSS2JSON

export class SingleBlog extends React.Component<any, any> {
  constructor(props) {
    super(props);
    console.log('singleBlog data from RSS: ', { data});
    this.state = {
      mediumURL:
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@3d-points',
      singlePost: {},
      titleId: props.location.state.item.guid,
      avatar: '',
      profileLink: '',
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    console.log('blogPost props', this.props);
    console.log('blogPost props', this.props.location.state);
    const { mediumURL } = this.state;
    Axios.get(mediumURL)

      .then(data => {
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items;
        const posts = res.filter(item => item.categories.length > 0);
        for (const i in posts) {
          const title = `${posts[i].guid}`;
          if (title === this.state.titleId) {
            const post = posts[i];

            this.setState(p => ({
              singlePost: post,
              avatar,
              profileLink,
              isLoading: false,
            }));
          }
        }
      })
      .catch(e => {
        this.setState({ error: e.toJSON() });
        console.log(e);
      });
  }

  render() {
    console.log('RENDER in blogPost: ', this.state);
    console.log('Cetegories in blogPost: ', this.state.singlePost.categories);
    console.log(
      'Cetegories type in blogPost: ',
      typeof this.state.singlePost.categories
    );
    const { singlePost } = this.state;

    const categories = () => {
      const categoriesArray = [];
      for (const i in singlePost.categories) {
        categoriesArray.push(singlePost.categories[i]);
      }
      return categoriesArray;
    };

    let post;
    if (singlePost) {
      post = (
        <>
          { <img }
{  className={styles.mainImage} }
{  src={singlePost.thumbnail} }
{  alt="main_image" }
{ />}
<div className={styles.postContentContainer}>
            <h1>{singlePost.title}</h1>
            <div className={styles.firstPublicationDate}>
              {moment(singlePost.pubDate).format('MMM DD, YYYY')}
            </div>
            <ul className={styles.hashtags}>
              {categories().map((post, index) => {
                return <li className={styles.singleHashtag}>#{post}</li>;
              })}
            </ul>
          </div>
<div
  className={styles.content}
  dangerouslySetInnerHTML={{ __html: singlePost.content }}
/>
</>
);
}
if (this.state.isLoading) {
  post = <div> Loading... </div>;
}
if (this.state.error) {
  const error = this.state.error.code
    ? this.state.error.code
    : this.state.error.name;
  const errorMsg = this.state.error.message;
  post = (
    <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
  );
}

return (
  <Layout>
        <SEO
          title={singlePost.title}
          description={singlePost.title}
          pathname="url" // TODO
          image={singlePost.thumbnail}
        />
        <ScrollIndicator />
        <section className={styles.sectionContainer}>{post}</section>
      </Layout>
);
}
}

export default SingleBlog;
*/
