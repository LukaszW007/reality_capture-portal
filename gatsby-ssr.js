/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { Helmet } from 'react-helmet';

export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.meta.toComponent(),
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  const sortedHeadComponents = headComponents.sort((x, y) => {
    // console.log('LOG z GATSBY-SSR: ', x);
    // console.log('LOG YYYYYYYYYYY z GATSBY-SSR: ', y);
    if (Array.isArray(x)) {
      // console.log('X is Array : ', x);
      if (x[0] !== []) {
        if ([0].props && x[0].props['data-react-helmet']) {
          // console.log('XXXXXXXXXXXXXXXXXXXXX: ', x);
          return -1;
        }
        return -1;
      }
    } else if (!Array.isArray(x)) {
      // console.log('X is NOT Array : ', x);
      if (x.props && x.props['data-react-helmet']) {
        // console.log('XXXXXXXXXXXXXXXXXXXXX: ', x);
        return -1;
      }
    }
    if (Array.isArray(y)) {
      // console.log('ARRAY YYY: ', y);
      if (y[0] !== [] && y[0] !== undefined) {
        if ('props' in y[0] && y[0].props && y[0].props['data-react-helmet']) {
          // console.log('YYYYYYYYYYYYYYYYYYYY: ', y);
          return 1;
        }
        return 1;
      }
    } else if (!Array.isArray(y)) {
      // console.log('Y is NOT Array : ', y);
      if (y.props && y.props['data-react-helmet']) {
        // console.log('YYYYYYYYYYYYYYYYYYYY: ', y);
        return 1;
      }
    }
    // console.log('X i Y: ', x, y);
    return 0;
  });
  replaceHeadComponents(sortedHeadComponents);
  console.log('headComponents ', sortedHeadComponents);
};
