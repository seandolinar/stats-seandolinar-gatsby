import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import AdSense from 'react-adsense';

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
            { name: 'google-site-verification', content: '4zzLgNmIbi66VfwfkRprZoo2eebh52ac6wdyqkWl9Nk'}
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

          <script>{`
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-9996180831969957",
                  enable_page_level_ads: true
            });
          `}
          </script>
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
          <div className="ra-column visible-desktop">
            <AdSense.Google
              client='ca-pub-9996180831969957'
              slot='2589150622'
              style={{ display: 'block', margin: 'auto' }}
              format='auto'
              responsive='true'
            />
          </div>
          <div className="ra-column visible-desktop right">
            <AdSense.Google
                client='ca-pub-9996180831969957'
                slot='9693615028'
                style={{ display: 'block', margin: 'auto' }}
                format='auto'
                responsive='true'
              />
          </div>
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
