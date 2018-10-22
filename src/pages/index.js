import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import PostThumbnail from '../components/PostThumbnail';


const IndexPage = (props) => {

  const data = props.data.allWordpressPost.edges;

  const postItems = data.filter((d,i) => {
    d = d.node
    console.log(d)
    return d.featured_media && d.featured_media.guid && d.featured_media.guid.length > 0 && i < 24;
  }).map(d => {
    const {node: {title, featured_media, slug}} = d;
    return <PostThumbnail title={title} slug={slug} imgUrl={featured_media.guid} />;
  })


  return (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {postItems}
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
          guid
        }
      }   
    }
  }
}`