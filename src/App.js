import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <p> By: {this.props.author}</p>
        <p> {this.props.body} </p>
        <h3> COMMENTS:</h3>
        <p class="comment">  {this.props.comments[0]}</p>
        <p class="comment">  {this.props.comments[1]}</p>
        <p class="comment">  {this.props.comments[2]}</p>


      </div>
    )
  }
}

export default Post
