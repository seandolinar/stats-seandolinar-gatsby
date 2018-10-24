import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostThumbnail from '../components/PostThumbnail';

import '../styles/template_category.scss';


class CategoryTemplate extends Component {
  render() {
    const {data: {allWordpressPost}, pageContext: {id}} = this.props;

    const postsCategory = allWordpressPost.edges.filter(({node}) => {
      if (!node.featured_media) {
        return false
      }
      if (node.categories.length) {
        return node.categories.reduce((p,c) => {
          return p || c.id === id
        }, false)
      }
      return false;
        
    }).map(({node: {title, slug, featured_media, excerpt}}) => {
      return <><PostThumbnail 
      title={title} 
      slug={slug} 
      imgUrl={featured_media.source_url} 
      /><div className="category-item-copy" dangerouslySetInnerHTML={{ __html: excerpt }}></div></>;
    })

    return (
        <Layout pageType="category">
           {postsCategory}
        </Layout>
    )
  }
}

//<div className="category-item">

export default CategoryTemplate


export const  pageQuery = graphql`
query {
  allWordpressPost {
    edges {
      node {
        slug,
        id,
        date,
        title,
        excerpt,
        categories {
          id
        },
        featured_media {
          source_url
        }
      }   
    }
  }
}`