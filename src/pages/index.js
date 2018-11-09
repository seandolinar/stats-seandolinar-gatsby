import React from 'react';
import { Link } from 'gatsby';
import AdSense from 'react-adsense';

import Layout from '../components/layout';
import PostThumbnail from '../components/PostThumbnail';

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


  return (
  <Layout>
    {/* <Link to="/page-2/">Go to page 2</Link> */} 
    <div className="grid-wrapper page-index">
      {postItems}
    </div>
  </Layout>
)}

export default IndexPage


export const  pageQuery = graphql`
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

