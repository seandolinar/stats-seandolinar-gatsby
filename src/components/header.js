import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <Link
  className="site-header"
  to="/"
  style={{
    color: 'white',
    textDecoration: 'none',
  }}
>
    <img 
      src="https://stats.seandolinar.com/wp-content/uploads/2014/03/cropped-site_graphic_dark.png" 
      style={{width: '100%'}}
    />
    </Link>

)

export default Header
