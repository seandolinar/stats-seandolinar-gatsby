import React from 'react'
import { Link } from 'gatsby'

class PostThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }
 
  render() {
      return <Link to={'/' + this.props.slug}><div><h4 dangerouslySetInnerHTML={{ __html: this.props.title }} /> 
      <img src={this.props.imgUrl} /> 
    </div></Link>
  }
}

export default PostThumbnail
