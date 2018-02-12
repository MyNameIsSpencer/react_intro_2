import React, {Component} from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      highTemp: 0,
      lowTemp: 0,
      city: '',
      description: '',
      windSpeed: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value})
    console.log('Your zip code is' + this.state.zipcode)
  }

  handleSubmit(event) {

    let base = this
    let weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98';
    fetch(weatherAPI)
      .then((response) => {
        return response.json()
      }).then((json) => {
        console.log('Parsed JSON', json)
        base.setState({
          highTemp: json.main.temp_max,
          lowTemp: json.main.temp_min,
          city: json.name,
          description: json.weather[0].description,
          windSpeed: json.wind.speed
        })
      }).catch((ex) => {
        console.log('Whoa nelly, somein ain`t right har', ex)
        alert('Err! ' + ex)
      })

      event.preventDefault()
    // your fetch here
    // your state updates go under function(json)

  }

  render() {
    return (
      <div>
        <p>So here is about us.....      I forgot my wallet, can you lend me a $20?????</p>
      </div>
    )
  }
}

export default About
