import React, { Component } from "react";
import axios from "axios";
import "../styles/WeatherCurrent.css";

// WeatherCurrent component will call API and render the current weather data.
class WeatherCurrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: props.homepage,
      results: [],
      city_name: "",
      local_time: "",
      current_temp: "",
      current_feelsLike: "",
      humidity: "",
      weather_icon: "",
      is_day: "",
      weather_desc: "",
      wind: "",
      precip: ""
    };
  }

  componentDidMount = async () => {
    // Parameters used to call the Weatherstack API - today's weather
    const KEY = "1d5857743783fad0dbc744550e4f26df";
    const unit = "f";

    const API = `http://api.weatherstack.com/current?access_key=${KEY}&query=10010&units=${unit}`;

    const resp = await axios(API);

    this.setState(() => ({
      results: resp.data,
      city_name: resp.data.location.name,
      local_time: resp.data.location.localtime,
      current_temp: resp.data.current.temperature,
      current_feelsLike: resp.data.current.feelslike,
      humidity: resp.data.current.humidity,
      weather_icon: resp.data.current.weather_icons[0],
      weather_desc: resp.data.current.weather_descriptions[0],
      is_day: resp.data.current.is_day,
      wind: resp.data.current.wind_speed,
      precip: resp.data.current.precip
    }));
  };

  render() {
    return (
      <div>
        <div className="current-outerframe">
          <div className="current-city">{this.state.city_name}</div>
          <div className="current-icontemp">
            <img
              className="current-weather-icon"
              src={this.state.weather_icon}
            />
            <h3 className="current-temp">{this.state.current_temp}&deg; F</h3>
          </div>

          <div className="current-temp-frame">
            <h3 className="current-feelsLike">
              Feels like: {this.state.current_feelsLike} &deg; F
            </h3>
            <h3 className="current-humidity">
              Precipitation: {this.state.precip} %
            </h3>
            <h3 className="current-humidity">
              Humidity: {this.state.humidity} %
            </h3>
            <h3 className="current-humidity">Wind: {this.state.wind} mph</h3>
            <h3 className="current-desc">Sky: {this.state.weather_desc}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCurrent;
