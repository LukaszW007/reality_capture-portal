const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions; // Fetch all the posts
  const posts = await graphql(`
    {
      allPrismicPosts {
        edges {
          node {
            uid
          }
        }
      }
    }
  `).catch(error => {
    console.error(error);
  });
  // Load the post template
  // const templateBlogPost = path.resolve('src/pages/blogPost.tsx');
  // posts.data.allPrismicBlogPosts.edges.forEach(edge => {
  //   // TODO cos z ta data.allPrismic jest nie tak
  //   // Create a page for every post
  //   createPage({
  //     path: `/posts/${edge.node.uid}`,
  //     component: templateBlogPost,
  //     context: { uid: edge.node.uid },
  //   });
  // });

  const templatePost = path.resolve('src/pages/blogPost.tsx');
  posts.data.allPrismicPosts.edges.forEach(edge => {
    // TODO cos z ta data.allPrismic jest nie tak
    // Create a page for every post
    createPage({
      path: `/posts/${edge.node.uid}`,
      component: templatePost,
      context: { uid: edge.node.uid },
    });
  });
};
