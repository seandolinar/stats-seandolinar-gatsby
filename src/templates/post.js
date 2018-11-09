import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import PostIcons from "../components/PostIcons"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Header from '../components/header';
import ErrorBoundary from '../components/ErrorBoundary';
import AdSense from 'react-adsense';


// import { rhythm } from "../utils/typography"

import '../styles/post.scss';
import '../styles/crayon.css';

class PostTemplate extends Component {

  componentDidMount() {
      console.log(document.getElementById('post-content').children)

    const adDOM = document.createElement('div')
    // adDOM
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
    const entryDate = new Date(post.date);

    
    return (
        <Layout pageType="post">
          <div className="post-wrapper">
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div className="post-timestamp">
                <span>📅</span>
                <time className="entry-date" dateTime={post.date}>{entryDate.toLocaleString('en-us', { month: 'long' , day: 'numeric', year: 'numeric'})}</time>
              </div>
              <div id="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Layout>
    )
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
      date
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`


