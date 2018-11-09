import React from 'react'
import { Link } from 'gatsby'
import AdSense from 'react-adsense';

// import MenuCategory from './MenuCategory';

const Header = ({ siteTitle }) => {
  return (
  <><Link
  className="site-header"
  to="/"
  style={{
    color: 'white',
    textDecoration: 'none',
    zIndex: 1
  }}
>
    <img 
      src="https://stats.seandolinar.com/wp-content/uploads/2014/03/cropped-site_graphic_dark.png" 
      style={{width: '100%'}}
    />
    </Link>
    {/* <div className="ra-menu visible-desktop">
        <AdSense.Google
          client='ca-pub-9996180831969957'
          slot='8635684224'
          style={{ display: 'block', margin: 'auto' }}
          format='auto'
          responsive='true'
        />
    </div> */}
</>
)
}

export default Header
