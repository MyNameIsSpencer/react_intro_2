import React, {Component} from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shakeSpeare:""
    }
  }

  componentDidMount(){
    var base = this;

    let poemApi = 'http://ShakeItSpeare.com/api/poem';
    fetch(poemApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({ shakeSpeare: json.poem });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      })
  }

  render() {
    let poetry = this.state.shakeSpeare;
    if (this.state.shakeSpeare) {
      return (
        <div>
          <p>Hei, Chekc oot one of eer pagis. You can doit....</p>
          <p>Lak at thas batiful pum</p>
          {poetry}
        </div>
      )
    }
      return (
        <div>
          <p>Hei, Chekc oot one of eer pagis. You can doit....</p>
          <p>Lak at thas batiful pum</p>
          Ladding....
        </div>
      )
    }
  
}

export default Home
