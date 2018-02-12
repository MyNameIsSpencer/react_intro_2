import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import './App.css';
import Home from './Home.js'
import Blog from './Blog'
import FavouriteFood from './FavouriteFood.js'
import FavouriteMovie from './FavouriteMovie.js'
import About from './About.js'


const post = {
  postTitle: "Galactizarauz",
  postAuthors: [
    "Dinotron",
    "Tiny T-Rex",
    "Ivory Iguanodon",
    "Brontasaurus Bro"
  ],
  postBody: "When a dinosaur is faced with a life crisis his CPU can't compute...",
  postComments: [
    " Blew my MIND!!",
    " I never thought I could relate so much to a robotic dinosaur.",
    " The ending where Triceratops killed his father to validate his inner worth could have been executed better"
  ]
}

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Go to Home Page</Link>{'  '}
        <Link to="/about">Abooout Uuus</Link>{'  '}
        <Link to="/blog">Main Bloooog</Link>{'  '}
        <Link to="/favourite_food">Favourite FOOD!</Link>{'  '}
        <Link to="/favourite_movie">Favourite MOVIE!</Link>
      </nav>

      <hr/>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/favourite_food" component={FavouriteFood} />
      <Route path="/favourite_movie" component={FavouriteMovie} />
      <Route path="/blog" component={
        () => (<Blog title={post.postTitle}
                allAuthors={post.postAuthors}
                body={post.postBody}
                comments={post.postComments} />
        )}/>
    </div>
  </Router>
)

export default App
