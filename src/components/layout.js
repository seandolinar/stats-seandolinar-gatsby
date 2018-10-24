import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import '../styles/layout.scss';

const Layout = ({ children, pageType }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="site-wrapper">
      <div className="site-content-wrapper">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          className={'site-content ' + pageType}
          style={{
            // margin: '0 auto',
            // maxWidth: 960,
            // padding: '1em',
            // paddingTop: 0,
          }}
        >
          {children}
        </main>
        </div>
        <footer>
          <div className="footer-content">
            @seandolinar
          </div>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
