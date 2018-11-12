import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import PostIcons from "../components/PostIcons"
// import Img from "gatsby-image"
// import LayoutMain from '../components/LayoutMain';
import Header from '../components/header';
import ErrorBoundary from '../components/ErrorBoundary';
import AdSense from 'react-adsense';

import Helmet from 'react-helmet';



// import { rhythm } from "../utils/typography"

import '../styles/post.scss';
import '../styles/crayon.css';
import Layout from "../components/layout";

class PostTemplate extends Component {

  componentDidMount() {

    const adDOM = document.createElement('div')
    adDOM.id = 'ra-wrapper'

    const adReact = (
      <div className="ra-menu">
        <ErrorBoundary>
          <AdSense.Google
            client='ca-pub-9996180831969957'
            slot='8635684224'
            style={{ display: 'block', margin: 'auto' }}
            format='auto'
            responsive='true'
          />
        </ErrorBoundary>
      </div>)
    ReactDOM.render(adReact, adDOM)


    const adDOM_2 = document.createElement('div')
    // adDOM
    adDOM_2.id = 'ra-wrapper'

    const adReact_2 = (
      <div className="ra-menu">
        <ErrorBoundary>
          <AdSense.Google
            client='ca-pub-9996180831969957'
            slot='2589150622'
            style={{ display: 'block', margin: 'auto' }}
            format='auto'
            responsive='true'
          />
        </ErrorBoundary>
      </div>)
    ReactDOM.render(adReact_2, adDOM_2)

      const DOMChildren = document.getElementById('post-content').children

      if (DOMChildren.length > 5) {
        document.getElementById('post-content').children[4].append(adDOM)
      }

      if (DOMChildren.length > 15) {
        document.getElementById('post-content').children[14].append(adDOM_2)
      }

  }


  render() {

    const post = this.props.data.wordpressPost;
    const site = this.props.data.site;
    const entryDate = new Date(post.date);

    const featuredMedia = !!post.featured_media && post.featured_media.source_url

    let metaTags = 	(!!post.tags && post.tags) || []
    
    // metaTags = !!post.categories && post.categories.filter(d => d.wordpress_id !== 1)
  
    metaTags = post.categories ?  metaTags.concat(post.categories.filter(d => d.wordpress_id !== 1)) : metaTags

    metaTags = metaTags.map(d => 	<meta key={d.name} property="article:tag" content={d.name} />)
    
    return (<Layout pageType="post"><div className="post-wrapper">
              <Helmet>
                <title>{post.title} – {site.siteMetadata.title}</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title}/>
                <meta property="og:url" content={'https://stats.seandolinar.com/' + post.slug}  />
                <meta property="article:published_time" content={post.date} />
              	<meta property="article:modified_time" content={post.modified}/>
                {featuredMedia && <meta property="og:image" content={featuredMedia} />}
                {metaTags}
                <meta name="twitter:card" content="summary" />
              </Helmet>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div className="post-timestamp">
                <span>📅</span>
                <time className="entry-date" dateTime={post.date}>{entryDate.toLocaleString('en-us', { month: 'long' , day: 'numeric', year: 'numeric'})}</time>
              </div>
              <div id="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div></Layout>)
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title,
      content,
      date,
      modified,
      slug,
      featured_media {
        source_url
      },
      tags {
        name
      },
      categories {
        name,
        wordpress_id
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`


