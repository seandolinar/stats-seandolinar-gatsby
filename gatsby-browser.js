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

import Layout from './src/components/layout';
// import { Children } from 'react';

export const wrapRootElement = ({element}) => <Layout>{element}</Layout>
