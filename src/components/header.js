import React from 'react'
import { Link } from 'gatsby'
import AdSense from 'react-adsense';

// import MenuCategory from './MenuCategory';

const Header = ({ siteTitle }) => {
  return (
  <div id="site-header-wrapper" className="site-header-wrapper"><Link
  className="site-header"
  to="/"
  style={{
    color: 'white',
    textDecoration: 'none',
    zIndex: 1
  }}
>
    <div className="header-logo-animated">
      <div className="header-logo-animated-bar"></div>
      <div className="header-logo-animated-bar">
        STATS
      </div>
      <div className="header-logo-animated-bar">
        <span>[dot]</span>SEANDOLINAR<span>[dot][com]</span>
      </div>
      <div className="header-logo-animated-bar"></div>
    </div>
    </Link>
</div>
)
}

export default Header
