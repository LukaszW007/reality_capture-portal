// when using github pages, add custom domain. Both deploy commands work!
const path = require('path');

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Reality Capture portal`,
    description: `Need to create digital twin of a building? Get to know reality capture and scan-to-BIM technics like a laser scanning to create 3D BIM model. Free video tutorials`,
    author: `Lukasz W`,
    siteUrl: `https://3d-points.com`,
    keywords: [
      `reality capture`,
      `3D scanning`,
      `laser scanning`,
      `photgrammetry`,
      `scan to BIM`,
      `BIM modeling`,
      `digital twin`,
      `3D model`,
      `UAV`,
      `LIDAR`,
      `drone`,
      `mobile scanning`,
      `mobile mapping`,
      `AEC`,
      `GIS`,
      `Building Information System`,
      `Geographic Information System`,
      `HDS`,
      `High Definition Scanning`,
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://3d-points.com',
        sitemap: 'https://3d-points.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-8GB4XZ7RMP',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/*`],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: '3d-points',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        // shouldNormalizeImage: ({ node, key, value }) => {
        //   return true;
        // },
        schemas: {
          page: require('./src/schemas/page.json'),
          blog_post: require('./src/schemas/blog_post.json'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo_icon 750x750.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -200,
      },
    },
  ],
};
