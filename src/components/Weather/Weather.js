import React, { Component } from "react";
import { Route, Link } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      weather: [],
      main: [],
      unit: "F"
    };
  }

  componentDidMount = async () => {
    const KEY = "f0722d727f4810c1e22014a286bc361e";
    const nycId = "5128581";
    const unit = "imperial";
    const API = `https://api.openweathermap.org/data/2.5/weather?id=${nycId}&units=${unit}&appid=${KEY}`;

    const resp = await axios(API);

    this.setState({
      results: resp.data,
      weather: resp.data.weather,
      main: resp.data.main
    });
    console.log(resp);
    // console.log(`RESULTS:  ${resp}`);
    debugger;
  };
  render() {
    return (
      <>
        {this.state.results && (
          <div>
            <h1>Weather </h1>
            <h2>{this.state.results.name}</h2>

            {this.state.weather.map((sky, idx) => (
              <div key={idx}>
                <h3>cloudy</h3>
              </div>
            ))}

            <h2>
              {this.state.main.temp} {this.state.unit}
            </h2>
            {/* <h2>{this.state.results.main.temp_max} </h2> */}
          </div>
        )}
      </>
    );
  }
}

export default Weather;
