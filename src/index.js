import React from 'react'
import ReactDOM from 'react-dom'
import Post from './App'
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

var post = {
  postTitle: "Galactizarauz",
  postAuthor: "Dinotron",
  postBody: "What do you do when faced with a life crisis you don't have the CPU to compute?",
  postComments: [
    " Blew my MIND!!",
    " I never thought I could relate so much to a robotic dinosaur.",
    " The ending where Triceratops killed his father to validate his inner worth could have been executed better"
  ]
}

ReactDOM.render(
  <Post
  title = {post.postTitle}
  author = {post.postAuthor}
  body = {post.postBody}
  comments = {post.postComments}/>,
   document.getElementById('root')
 )
// registerServiceWorker();
