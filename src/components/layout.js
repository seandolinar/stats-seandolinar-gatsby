import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import AdSense from 'react-adsense';
import ErrorBoundary from './ErrorBoundary';

import Header from './header';
import MenuCategory from './MenuCategory';
import ButtonMenu from './ButtonMenu';

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

  const [isMenuMobileOpen, setMenuOpen] = useState(false);


  return <div className="site-wrapper">
    <Helmet
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
    <Header />
    <div className="site-header-menu-mobile">
      <ButtonMenu onClick={() => setMenuOpen(!isMenuMobileOpen)} isMenuOpen={isMenuMobileOpen}></ButtonMenu>
    </div>
    <div className="site-content-wrapper">
      <MenuCategory isMenuMobileOpen={isMenuMobileOpen} />
      <main
        className={'site-content ' + pageType}
      >
        <div className="ra-column visible-desktop">
          <ErrorBoundary>
            <AdSense.Google
              client='ca-pub-9996180831969957'
              slot='2589150622'
              style={{ display: 'block', margin: 'auto' }}
              format='auto'
              responsive='true'
            />
          </ErrorBoundary>
        </div>
        <div className="ra-column visible-desktop right">
          <ErrorBoundary>
            <AdSense.Google
              client='ca-pub-9996180831969957'
              slot='9693615028'
              style={{ display: 'block', margin: 'auto' }}
              format='auto'
              responsive='true'
            />
          </ErrorBoundary>
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

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
