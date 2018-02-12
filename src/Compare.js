import React, { Component } from 'react';
import Comment from './Comment.js';
import Author from './Author.js';

class Blog extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }
  render() {

    let authors = [
      <Author author={this.props.allAuthors[0]}/>,
      <Author author={this.props.allAuthors[1]}/>,
      <Author author={this.props.allAuthors[2]}/>
    ]

    /**
     * Bonus: using .map!
     * @type {Array}
     */
    // let authors = this.props.allAuthors.map( (author, index) => (
    //   <Author author={author} key={index} />
    // ));

    let comments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{authors}</p>
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.handleClick(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <p>{comments}</p>
      </div>
    )
  }
}

export default Blog



















constructor (props) {
  super ()
  this.state = {
    body: props.body,
    name: props.name
  }
}
changeBody(e) {
  let newBody = prompt("What should the new body be?")
  this.setState({
    body: newBody
  })
}

handleFormInput (e) {
    console.log(e);
    this.setState({
      body: e.target.value
    })
  }

render() {
  // let authors = [
  //   <Author author={this.props.allAuthors[0]}/>,
  //   <Author author={this.props.allAuthors[1]}/>,
  //   <Author author={this.props.allAuthors[2]}/>
  // ]

  let authors = this.props.allAuthors.map(function(name){
    return <Author author={name}/>
  })

  let allComments = [
    <Comment body={this.props.comments[0]} />,
    <Comment body={this.props.comments[1]} />,
    <Comment body={this.props.comments[2]} />
  ]
  return (
    <div>
      <Router>
        <div>
          <nav>
            <Link to="/">Go to Home Page</Link>{' | '}
            <Link to="/about">Abooout Uuus</Link>{' | '}
            <Link to="/blog">Main Bloooog</Link>{' | '}
            <Link to="/favourite_food">Favourite FOOD!</Link>{' | '}
            <Link to="/favourite_movie">Favourite MOVIE!</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/favourite_food" component={FavouriteFood} />
          <Route path="/favourite_movie" component={FavouriteMovie} />
        </div>
      </Router>
    </div>
  )
}
