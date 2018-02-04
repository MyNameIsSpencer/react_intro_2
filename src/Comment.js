import React, {Component} from 'react'

class Comment extends Component {
  render () {
    return (
      <div>
        <p class="comment">{this.props.body} {"\n"}</p>
        <p>{"\n"} </p>
      </div>
    )
  }
}


export default Comment
