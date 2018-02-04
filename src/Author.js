import React, {Component} from 'react'

class Author extends Component {
  render () {
    return (
      <div>
        <h3> Written By: {this.props.author}</h3>
      </div>
    )
  }
}

export default Author
