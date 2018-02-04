import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

var post = {
  postTitle: "Galactizarauz",
  postAuthors: [
    "Dinotron",
    "Tiny T-Rex",
    "Ivory Iguanodon"
  ],
  postBody: "When a dinosaur is faced with a life crisis his CPU can't compute...",
  postComments: [
    " Blew my MIND!!",
    " I never thought I could relate so much to a robotic dinosaur.",
    " The ending where Triceratops killed his father to validate his inner worth could have been executed better"
  ]
}




ReactDOM.render(
  <Post
  title = {post.postTitle}
  allAuthors = {post.postAuthors}
  body = {post.postBody}
  comments = {post.postComments}/>,
   document.getElementById('root')
 )
