import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// import logoImage from '../assets/images/Reality Capture logo 110x460_transparent_background.png';

function SEO({ description, lang, meta, title, pathname, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const canonical = pathname;
  const logoImage =
    'https://images.prismic.io/3d-points/163c9ef3-5eb9-4cb9-adaa-ac3d3451eb7f_Reality+Capture+logo+1549x1415_white_background+podluzny+Trueno+czcionka.jpg?auto=compress,format';
  const ogImage =
    image === undefined
      ? 'https://images.prismic.io/3d-points/163c9ef3-5eb9-4cb9-adaa-ac3d3451eb7f_Reality+Capture+logo+1549x1415_white_background+podluzny+Trueno+czcionka.jpg?auto=compress,format'
      : image;

  console.log('Canonical ', canonical);
  console.log('Pathname ', pathname);
  console.log('Image ', ogImage);
  console.log('logoImage ', logoImage);

  return (
    <Helmet
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:imageAlt`,
          content: logoImage,
        },
        {
          property: 'og:image:width',
          content: `600px`,
        },
        {
          property: 'og:image:height',
          content: `314px`,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
      ].concat(meta)}
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }

    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// };

export default SEO;
