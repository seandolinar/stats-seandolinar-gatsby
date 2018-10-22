import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '1.45rem 1.0875rem',
      // }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
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
      </h1>
    </div>
  </div>
)

export default Header
