// global dependencies
import React from 'react';

// local dependencies
// import { graphql, Link } from 'gatsby';

import Axios from 'axios';
import ComboBox from 'react-responsive-combo-box';
import 'react-responsive-combo-box/dist/index.css';
import Layout from '../components/gatsby_elements/layout';
import SEO from '../components/seo';
import styles from './blog.module.scss';
// import SinglePostOnPostsList from '../components/SinglePostOnPostsList';

import PostCard from '../components/PostCard';
import authorDotsPicturePNG from '../assets/images/author-dots-opt.png';

function sortByTitle(objectA: any, objectB: any) {
  const titleA = objectA.title;
  const titleB = objectB.title;
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}

function sortByDate(objectA: any, objectB: any) {
  const MONTHS = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };
  const dateA = objectA.pubDate.split(' ');
  const dateB = objectB.pubDate.split(' ');

  return (
    dateA[2] - dateB[2] ||
    MONTHS[dateA[1]] - MONTHS[dateB[1]] ||
    dateA[0] - dateB[0]
  );
}

function dynamicSort(postsObject: any, sortBy: string, ascending: boolean) {
  console.log('Input data to dynamicSort ', postsObject);
  let tempArray = [];
  let sortedArray = [];
  const upcomingPostsArray = [];
  const unsortedPostsArray = [];

  if (sortBy === 'title') {
    for (const element of postsObject) {
      if (element.title.includes('upcoming')) {
        upcomingPostsArray.push(element);
      } else {
        unsortedPostsArray.push(element);
      }
    }

    if (ascending) {
      tempArray = unsortedPostsArray.sort(sortByTitle);
      sortedArray = tempArray.concat(upcomingPostsArray);
    } else if (!ascending) {
      tempArray = unsortedPostsArray.sort(sortByTitle).reverse();
      sortedArray = tempArray.concat(upcomingPostsArray);
    }
    console.log('SORTED by title: ', sortedArray);
  } else if (sortBy === 'date') {
    for (const element of postsObject) {
      tempArray.push(element);
    }
    if (ascending) {
      sortedArray = tempArray.sort(sortByDate);
    } else if (!ascending) {
      sortedArray = tempArray.sort(sortByDate).reverse();
    }
    sortedArray = tempArray.sort(sortByDate);
    console.log('SORTED by date: ', sortedArray);
  }

  return sortedArray;
}

class BlogPostsList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      sortByState: { sortingBy: 'title', ascending: true },
      mediumURL:
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@3d-points',
      profile: {
        profileTitle: '',
        name: '',
        avatar: '',
        profileURL: '',
      },
      items: [],
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
            items: posts,
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

  selectedSortOption(selection: string) {
    switch (selection) {
      case 'A to Z':
        this.setState({ sortByState: { sortingBy: 'title', ascending: true } });
        break;
      case 'Z to A':
        this.setState({
          sortByState: { sortingBy: 'title', ascending: false },
        });
        break;
      case 'Newest to oldest':
        this.setState({ sortByState: { sortingBy: 'date', ascending: true } });
        break;
      case 'Oldest to newest':
        this.setState({ sortByState: { sortingBy: 'date', ascending: false } });
        break;
      default:
        this.setState({ sortByState: { sortingBy: 'title', ascending: true } });
        break;
    }
    console.log('SELECTION in switch: ', selection);
  }

  render() {
    const {
      error,
      profile,
      items,
      isLoading,
      headerTitle,
      image,
      sortByState,
    } = this.state;
    // console.log('Profile.state in render: ', profile);
    console.log('State in render: ', this.state);

    const comboBoxItems = [
      'A to Z',
      'Z to A',
      'Newest to oldest',
      'Oldest to newest',
    ];

    let post;

    if (items) {
      console.log('dynamic sort: ', sortByState.sortingBy, sortByState.ascending );
      console.log('ITEMS: ', items );

      const sortedPosts = dynamicSort(
        items,
        sortByState.sortingBy,
        sortByState.ascending
      );
      console.log('posortowana tablica: ', sortedPosts)
      post = sortedPosts.map((post, index) => {
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
          title="List of blog posts at 3d-points.com"
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
          <div className={styles.informationContainer}>
            <div className={styles.postsCounter}>
              Number of published articles: {items.length}
            </div>
            <div className={styles.comboBoxContainer}>
              <span className={styles.comboBoxLabel}>Sort articles by:</span>
              <ComboBox
                options={comboBoxItems}
                placeholder="A to Z"
                optionsListMaxHeight={300}
                className={styles.comboBox}
                style={{
                  backgroundColor: 'white',
                  width: '350px',
                  margin: '0 auto',
                  borderRadius: '5px',
                }}
                focusColor="#ffc04a99"
                renderOptions={option => (
                  <div className="comboBoxOption">{option}</div>
                )}
                onSelect={option => {
                  this.selectedSortOption(option);
                  console.log('TRIGGER');
                }}
              />
            </div>
          </div>
          <div className={styles.underHeading}>
            <ul className={styles.listOfPosts}>{post}</ul>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogPostsList;

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
