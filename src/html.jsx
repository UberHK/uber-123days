// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr =
      require('!raw-loader!./styles/fonts.css') +
      require('!raw-loader!./styles/index.css');
  } catch (e) {
    console.log(e);
  }
}

const HTML = props => {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }
  return (
    <html lang="zh-Hant-HK">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {css}
      </head>
      <body>
        {props.preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
