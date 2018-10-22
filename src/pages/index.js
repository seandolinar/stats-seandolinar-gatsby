import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => {
  console.log(props.data.allWordpressPost.edges);
  const data = props.data.allWordpressPost.edges;

  const postItems = data.filter((d,i) => {
    d = d.node
    return d._links && d._links.wp_featuredmedia && d._links.wp_featuredmedia.length > 0 && i < 24;
  }).map(d => {
  
    fetch(d.node._links.wp_featuredmedia[0].href,{mode: 'no-cors'}) //{mode: 'no-cors'}
    .then(res => {
      // res.json()
      res.json().then(json => {
        console.log(json)
         
        return <div>
        <h4 dangerouslySetInnerHTML={{ __html: d.node.title }} /> 
          {/* <img src={json.guid.rendered} />  */}
        </div>
      }).catch(err => { return 'err'})
  }).catch(err => { return 'err'})
  
    
  })

  console.log(postItems)

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
        _links {
          wp_featuredmedia {
            embeddable,
            href
          }
        }
        
      }
      
    }
  }
}`