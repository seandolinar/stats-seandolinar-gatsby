import React from 'react'
import { Link } from 'gatsby'

class PostThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }
 
  render() {
      return <Link to={'/' + this.props.slug}><div className="post-thumbnail grid-item">
      <img src={this.props.imgUrl} />
      <h4 className="post-thumbnail-title" dangerouslySetInnerHTML={{ __html: this.props.title }} /> 
    </div></Link>
  }
}

export default PostThumbnail
