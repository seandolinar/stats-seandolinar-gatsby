import React from 'react';
import { Link } from 'gatsby';
import AdSense from 'react-adsense';

import LayoutMain from '../components/LayoutMain';
import PostThumbnail from '../components/PostThumbnail';

import Helmet from 'react-helmet';


import '../styles/index.scss';

const IndexPage = (props) => {

  const data = props.data.allWordpressPost.edges;

  const postItems = data.filter((d,i) => {
    d = d.node
    return d.featured_media && d.featured_media.source_url && d.featured_media.source_url.length > 0 && i < 24;
  }).map(d => {
    const {node: {title, featured_media, slug}} = d;
    return <PostThumbnail 
      title={title} 
      slug={slug} 
      imgUrl={featured_media.source_url} 
      />;
  })


  return (<LayoutMain pageType="index">
  <Helmet>
    <title>stats.seandolinar.com</title>
  </Helmet>
  <div className="grid-wrapper page-index">
      {postItems}
    </div></LayoutMain>)}

export default IndexPage


export const pageQuery = graphql`
query {
  allWordpressPost {
    edges {
      node {
        id
        title,
        slug,
        featured_media {
          source_url
        }
      }   
    }
  }
}`

