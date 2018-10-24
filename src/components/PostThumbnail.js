import React from 'react'
import { Link } from 'gatsby'

class PostThumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
 
  // handleClick() {
  //   fetch('https://stats.seandolinar.com', {method: 'post', body: JSON.stringify({test: 1})}).then(res => console.log(res))
  // }
  

  render() {
      return <Link to={'/' + this.props.slug}><div className="post-thumbnail grid-item">
      <img src={this.props.imgUrl} />
      <h4 className="post-thumbnail-title" dangerouslySetInnerHTML={{ __html: this.props.title }} /> 
    </div>    
</Link>
  }
}

export default PostThumbnail


//<button onClick={this.handleClick}>test me</button>