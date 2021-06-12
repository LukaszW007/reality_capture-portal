const Axios = require('axios');

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions; // Fetch all the posts
  const posts = await graphql(`
    {
      allFeedMediumBlog {
        edges {
          node {
            categories
            content {
              encoded
            }
            creator
            guid
            id
            link
            pubDate
            title
          }
        }
      }
    }
  `).catch(error => {
    console.error(error);
  });

  const templatePost = path.resolve('src/pages/blogPost.tsx');
  // console.log('POSTS in gatsby.node ', posts);
  posts.data.allFeedMediumBlog.edges.forEach(edge => {
    let postUid = edge.node.title
      .replace(/[.,'"/!$%^&*;:{}=\-_`~()?\s+]/g, '-')
      .replace(/[#’]/g, '');
    if (postUid.slice(-1) === '-') {
      postUid = postUid.slice(0, -1);
    }
    // console.log('postUID from gatsby.node ', postUid);
    // Create a page for every post
    createPage({
      path: `/posts/${postUid}`,
      component: templatePost,
      context: { id: edge.node.id },
    });
  });
};

// code for prismic.io

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions; // Fetch all the posts
//   const posts = await graphql(`
//     {
//       allPrismicPosts {
//         edges {
//           node {
//             uid
//           }
//         }
//       }
//     }
//   `).catch(error => {
//     console.error(error);
//   });
//   // Load the post template
//   // const templateBlogPost = path.resolve('src/pages/blogPost.tsx');
//   // posts.data.allPrismicBlogPosts.edges.forEach(edge => {
//   //   // TODO cos z ta data.allPrismic jest nie tak
//   //   // Create a page for every post
//   //   createPage({
//   //     path: `/posts/${edge.node.uid}`,
//   //     component: templateBlogPost,
//   //     context: { uid: edge.node.uid },
//   //   });
//   // });
//
//   const templatePost = path.resolve('src/pages/blogPost.tsx');
//   posts.data.allPrismicPosts.edges.forEach(edge => {
//     // TODO cos z ta data.allPrismic jest nie tak
//     // Create a page for every post
//     createPage({
//       path: `/posts/${edge.node.uid}`,
//       component: templatePost,
//       context: { uid: edge.node.uid },
//     });
//   });
// };
