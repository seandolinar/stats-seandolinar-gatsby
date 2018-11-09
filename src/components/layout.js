import React, {useState} from 'react';
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

  const [isMenuMobileOpen, setMenuOpen] = useState(false);
 console.log(isMenuMobileOpen)

  return (
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
      // <div className="site-wrapper">
      //  <Helmet
      //     title={data.site.siteMetadata.title}
      //     meta={[
      //       { name: 'description', content: 'Sample' },
      //       { name: 'keywords', content: 'sample, something' },
      //       { name: 'google-site-verification', content: '4zzLgNmIbi66VfwfkRprZoo2eebh52ac6wdyqkWl9Nk'}
      //     ]}
      //   >
      //     <html lang="en" />
      //     <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet" />
      //     <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
      //     <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      //   </Helmet>
      // <Header siteTitle={data.site.siteMetadata.title} />
      <>
      <div className="site-header-menu-mobile">
        <ButtonMenu onClick={() =>  setMenuOpen(!isMenuMobileOpen)} isMenuOpen={isMenuMobileOpen}/>
      </div>
      <div className="site-content-wrapper">
        <MenuCategory isMenuMobileOpen={isMenuMobileOpen}/>
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
        </>
      // </div>
    )}
    
  />
);}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
