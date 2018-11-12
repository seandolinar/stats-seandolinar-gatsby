// import React from 'react';
// import Helmet from 'react-helmet';
// import Header from './src/components/header';
// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/browser-apis/
//  */

// // You can delete this file if you're not using it
// // exports.onInitialClientRender = () => {
// //     console.log("ReactDOM.render has executed")
// //   }

// import Layout from './src/components/layout';
// // import { Children } from 'react';

// export const wrapRootElement = ({ element }) => <Layout>
//     <Helmet
//         title="stats.seandolinar.com"
//         meta={[
//             { name: 'google-site-verification', content: '4zzLgNmIbi66VfwfkRprZoo2eebh52ac6wdyqkWl9Nk' }
//         ]}
//     >
//         <html lang="en" />
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width" />
//         <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet" />
//         <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
//         {/* <link rel="canonical" href="https://stats.seandolinar.com" />  */}
//         <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
//         <meta property="og:site_name" content="stats.seandolinar.com" />
//     </Helmet>
//     {element}
// </Layout>



exports.onInitialClientRender = () => {
    window.STATS_SEANDOLINAR = true
  }