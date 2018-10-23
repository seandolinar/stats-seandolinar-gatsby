import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// import PostIcons from "../components/PostIcons"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Header from '../components/header';

// import { rhythm } from "../utils/typography"

import '../styles/post.scss'


class PostTemplate extends Component {
  render() {
      console.log(this.props)
    const post = this.props.data.wordpressPost
    const entryDate = new Date(post.date)
    console.log(entryDate)

    return (
        <Layout pageType="post">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <time class="entry-date" dateTime={post.date}>{entryDate.toLocaleString('en-us', { month: 'long' , day: 'numeric', year: 'numeric'})}</time>
            {/* <PostIcons node={post} css={{ marginBottom: rhythm(1 / 2) }} /> */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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