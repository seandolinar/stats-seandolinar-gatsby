import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import AdSense from 'react-adsense';
import ErrorBoundary from './ErrorBoundary';

import Header from './header';
// import MenuCategory from './MenuCategory';
// import ButtonMenu from './ButtonMenu';

import './layout.css';
import '../styles/layout.scss';

import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });

const Layout = ({ children, pageType }) => {

  // return (<StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `}
  //   render={data => ();
  //  )}
  // />

  return <><Helmet
      title="stats.seandolinar.com"
      meta={[
        { name: 'google-site-verification', content: '4zzLgNmIbi66VfwfkRprZoo2eebh52ac6wdyqkWl9Nk' }
      ]}
    >
      <html lang="en" />
      <meta charset="UTF-8" />
	    <meta name="viewport" content="width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
      {/* <link rel="canonical" href="https://stats.seandolinar.com" />  */}
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <meta property="og:site_name" content="stats.seandolinar.com" />
    </Helmet>
      <div className="site-wrapper">
        <Header />
        {children}
        <footer>
          <div className="footer-content">
            @seandolinar
          </div>
        </footer>
      </div></>
   
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
