import React, { Component } from "react";
import { Route, Link } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      results: [],
      weather: [],
      mainInfo: "",
      sky: "",
      unit: "F",

      daily: {}
    };
    // debugger;
  }

  componentDidMount = async () => {
    const KEY = "f0722d727f4810c1e22014a286bc361e";
    const nycId = "5128581";
    const unit = "imperial";

    const API = `https://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&units=${unit}&appid=${KEY}`;
    const resp = await axios(API);

    this.setState({
      results: resp.data,
      weather: resp.data.weather,
      mainInfo: resp.data.main,
      sky: resp.data.weather[0]
    });
    debugger;
  };

  render() {
    // debugger;
    return (
      <div>
        <h1> I AM IN Weather NOW NOW</h1>
        <h2>{this.state.id}</h2>
        <h3>{this.state.results.name}</h3>
        <h3>Temp {this.state.mainInfo.temp}</h3>
        <h3>Lo {this.state.mainInfo.temp_min}</h3>
        <h3>Hi {this.state.mainInfo.temp_max}</h3>
        <h2> Sky {this.state.sky.main}</h2>
      </div>
    );
  }
}

export default Weather;
