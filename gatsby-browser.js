import React from 'react';
import Helmet from 'react-helmet';
import Header from './src/components/header';
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// exports.onInitialClientRender = () => {
//     console.log("ReactDOM.render has executed")
//   }

// import Layout from './src/components/layout';
// import { Children } from 'react';

export const wrapRootElement = ({element}) => <div className="site-wrapper">
<Helmet
   title={''}
   meta={[
     { name: 'description', content: 'Sample' },
     { name: 'keywords', content: 'sample, something' },
     { name: 'google-site-verification', content: '4zzLgNmIbi66VfwfkRprZoo2eebh52ac6wdyqkWl9Nk'}
   ]}
 >
   <html lang="en" />
   <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet" />
   <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
   <link rel="canonical" href="https://stats.seandolinar.com" /> 
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
 </Helmet>
<Header siteTitle={''} />{element}</div>