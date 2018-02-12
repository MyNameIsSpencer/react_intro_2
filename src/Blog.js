import React, {Component} from 'react';
import Comment from './Comment.js'
import Author from './Author.js'

class Blog extends Component {
  constructor (props) {
    super ()
    this.state = {
      body: props.body,
      name: props.name
    }
  }
  handleClick (e) {
    let newBody = prompt("Put your body here")
    this.setState({
      body: newBody
    })
  }


  render() {

    let authors = this.props.allAuthors.map(function(name){
      return <Author author={name}/>
    })

    let allComments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))

    return (
      <div>
        <h1> {this.props.title} </h1>
      {
          // <h2> {this.state.name} </h2>
      }
        {authors}
        <p> {this.state.body} </p>
        <button onClick={(e) => this.handleClick(e)}>Edit Body</button>
        {
          // <input type="text" onChange={(e) => this.handleFormInput(e)} />
        }
        <h3> COMMENTS:</h3>
        <p>  {allComments} </p>
      </div>
    )
  }
}

export default Blog
