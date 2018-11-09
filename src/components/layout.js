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

  console.log(pageType)

  const [isMenuMobileOpen, setMenuOpen] = useState(false);

  return (<StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (<><Helmet
      title={''}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'google-site-verification', content: '4zzLgNmIbi66VfwfkRprZoo2eebh52ac6wdyqkWl9Nk' }
      ]}
    >
      <html lang="en" />
      <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
      {/* <link rel="canonical" href="https://stats.seandolinar.com" />  */}
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>
      <div className="site-wrapper">
        <Header />
        <div className="site-header-menu-mobile">
          <ButtonMenu onClick={() => setMenuOpen(!isMenuMobileOpen)} isMenuOpen={isMenuMobileOpen}></ButtonMenu>
        </div>
        <div className="site-content-wrapper">
          <MenuCategory isMenuMobileOpen={isMenuMobileOpen} />
          {children}
        </div>
        <footer>
          <div className="footer-content">
            @seandolinar
          </div>
        </footer>
      </div></>
    )}
  />);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
