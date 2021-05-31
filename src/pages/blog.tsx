// global dependencies
import React from 'react';

// local dependencies
import { graphql, Link } from 'gatsby';

import Axios from 'axios';
import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './blog.module.scss';
import SinglePostOnPostsList from '../components/SinglePostOnPostsList';

import PostCard from '../components/PostCard';
import authorDotsPicturePNG from '../assets/images/author-dots-opt.png';

class BlogPostsList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      mediumURL:
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@3d-points',
      profile: {
        profileTitle: '',
        name: '',
        avatar: '',
        profileURL: '',
      },
      item: [],
      isloading: true,
      error: null,
      headerTitle: 'Blog posts about Reality Capture technologies',
      image: {
        picture: authorDotsPicturePNG,
        alternativeText: 'author',
      },
    };
  }

  componentDidMount() {
    const { mediumURL } = this.state;
    Axios.get(mediumURL)

      .then(data => {
        console.log('Data w JSON z medium:', data);
        const feedImage = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; // This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(
          (item: { categories: string | any[] }) => item.categories.length > 0
        );
        const { title } = data.data.feed;

        this.setState(
          (pre: { profile: any }) => ({
            profile: {
              ...pre.profile,
              profileTitle: title,
              profileURL: profileLink,
              avatar: feedImage,
            },
            item: posts,
            isLoading: false,
          }),
          () => {
            console.log('This is State2', this.state);
          }
        );
      })
      .catch(e => {
        this.setState({ error: e.toJSON() });
        console.error(e);
      });
  }

  render() {
    const { error, profile, item, isLoading, headerTitle, image } = this.state;
    console.log('Profile.state in render: ', profile);

    let post;

    if (item) {
      post = item.map((post, index) => {
        console.log('INDEX ', index);
        return <PostCard key={index} profileInfo={profile} item={post} />;
      });
    }
    if (isLoading) {
      post = <div>Loading ...</div>;
    }
    if (error) {
      const errorCode = error.code ? error.code : error.name;
      const errorMsg = error.message;
      post = (
        <>
          <h2 className="red center1">{errorCode}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    return (
      <Layout>
        <SEO
          title="List of blog posts·3d-points.com"
          description="Page contains a list of the posts of the blog about reality capturing"
          pathname="/blog"
          image={image}
        />
        <section
          className={styles.sectionContainer}
          // onContextMenu={e => e.preventDefault()}
        >
          <div className={styles.blogHeader}>
            <h1 className={styles.headerTitle}>{headerTitle}</h1>
            <img
              className={styles.headerImage}
              src={image.picture}
              alt={image.alternativeText}
            />
          </div>
          <div className={styles.postsCounter}>{item.length}</div>
          <div className={styles.underHeading}>
            <ul className={styles.listOfPosts}>
              {post}
            </ul>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogPostsList;

// function dynamicSort(postsObject: any, sortBy: string, ascending: boolean) {
//   let tempArray = [];
//   let sortedArray = [];
//   const upcomingPostsArray = [];
//   let unsortedPostsArray = [];
//   const MONTHS = {
//     January: 1,
//     February: 2,
//     March: 3,
//     April: 4,
//     May: 5,
//     June: 6,
//     July: 7,
//     August: 8,
//     September: 9,
//     October: 10,
//     November: 11,
//     December: 12,
//   };
//
//   if (sortBy === 'uid') {
//     for (const element of postsObject) {
//       if (element.node.uid.includes('upcoming')) {
//         upcomingPostsArray.push(element.node.uid);
//       } else {
//         unsortedPostsArray.push(element.node.uid);
//       }
//     }
//
//     if (ascending) {
//       unsortedPostsArray = unsortedPostsArray.sort();
//       sortedArray = unsortedPostsArray.concat(upcomingPostsArray);
//     } else if (!ascending) {
//       tempArray = unsortedPostsArray.sort().reverse();
//       sortedArray = tempArray.concat(upcomingPostsArray);
//     }
//   } else if (sortBy === 'date') {
//     for (const element of postsObject) {
//       tempArray.push([element.node.first_publication_date, element.node.uid]);
//     }
//     sortedArray = tempArray.sort(function(a, b) {
//       const aa = a[0].split(' ');
//       const bb = b[0].split(' ');
//
//       return aa[2] - bb[2] || MONTHS[aa[1]] - MONTHS[bb[1]] || aa[0] - bb[0];
//     });
//   }
//
//   return sortedArray;
// }
//
// function sortPosts(posts: any) {
//   const sortedPosts = dynamicSort(posts, 'uid', true);
//   for (const post of sortedPosts) {
//     posts.map((singlePost, index) => {
//       if (singlePost === post) {
//         const {
//           data: postData,
//           first_publication_date: date,
//           uid,
//         } = singlePost.node;
//         const postTitle = postData.title[0].text;
//         const imageURL = postData.main_image.url;
//         const imageAlt = postData.main_image.alt;
//         const url = `/posts/${uid}`;
//         return (
//           <SinglePostOnPostsList
//             key={url}
//             singlePostData={{
//               postTitle,
//               imageAlt,
//               imageURL,
//               url,
//               date,
//             }}
//           />
//         );
//       }
//     });
//   }
// }

/*
const BlogPostsList: React.FC<any> = ({ data: queryData }) => {
  const posts = queryData.allPrismicPosts.edges;
  const pageData = queryData.prismicListofblogs.data;
  const image = pageData.main_image.url;
  const imageAltText = pageData.main_image.alt;
  const postsTotalCount = posts.totalCount;

  // console.log('POSTS: ', posts);
  //
  // console.log(dynamicSort(posts, 'uid', true));
  // console.log(dynamicSort(posts, 'uid', false));
  // console.log(dynamicSort(posts, 'date', false));

  return (
    <Layout>
      <SEO
        title="List of blog posts·3d-points.com"
        description="Page contains a list of the posts of the blog about reality capturing"
        pathname="/blog"
        image={image}
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
    allPrismicPosts(sort: { fields: [last_publication_date], order: DESC }) {
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
  }
`;
*/
