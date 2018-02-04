import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js'
import Author from './Author.js'

class Post extends Component {
  render() {
    let authors = [
      <Author author={this.props.allAuthors[0]}/>,
      <Author author={this.props.allAuthors[1]}/>,
      <Author author={this.props.allAuthors[2]}/>
    ]
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]
    return (
      <div>
        <h1> {this.props.title} </h1>
        {authors}
        <p> {this.props.body} </p>
        <h3> COMMENTS:</h3>
        <p class="comment">  {this.props.comments[0]}</p>
        <p class="comment">  {this.props.comments[1]}</p>
        <p class="comment">  {this.props.comments[2]}</p>
        <p class="comment"> </p>
        {allComments}



      </div>
    )
  }
}

export default Post
