import React, { Component } from 'react';
import { graphql } from 'gatsby';

import LayoutMain from '../components/LayoutMain';
import PostThumbnail from '../components/PostThumbnail';

import Helmet from 'react-helmet';


import '../styles/template_category.scss';


class CategoryTemplate extends Component {
  render() {
    const {data: {allWordpressPost}, pageContext: {id, name}} = this.props;

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
      return <React.Fragment key={slug}>
      <PostThumbnail 
        title={title} 
        slug={slug} 
        imgUrl={featured_media.source_url} 
        />
          <div className="category-item-copy" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </React.Fragment>;
    })

    return (
        <LayoutMain pageType="category">
            <Helmet>
                <title>{name} – stats.seandolinar.com</title>
            </Helmet>
           {postsCategory}
        </LayoutMain>
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