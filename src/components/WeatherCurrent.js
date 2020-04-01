import React, { Component } from "react";
import { Route, Link } from "react";
import axios from "axios";
import "../styles/WeatherCurrent.css";

class WeatherCurrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // const KEY = "f0722d727f4810c1e22014a286bc361e";
    const KEY = "a34416af42ea074efad5ada5656f6164";
    const nycId = "5128581";
    const unit = "f";

    const API = `http://api.weatherstack.com/current?access_key=${KEY}&query=10010&units=${unit}`;
    // const API = `https://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&units=${unit}&appid=${KEY}`;
    const resp = await axios(API);

    this.setState({
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
    });
    // debugger;
  };

  render() {
    return (
      <div>
        <h2 className="current-title"> CURRENT TEMPERARTURE </h2>

        <div className="current-outerframe">
          <h3 className="current-city">{this.state.city_name}</h3>

          <img className="current-weather-icon" src={this.state.weather_icon} />
          <div className="current-temp-frame">
            <h3 className="current-temp">Temp {this.state.current_temp}</h3>
            <h3 className="current-feelsLike">
              Feels {this.state.current_feelsLike}
            </h3>

            <h3 className="current-humidity">
              Precipitation {this.state.precip}
            </h3>
            <h3 className="current-humidity">Humidity {this.state.humidity}</h3>
            <h3 className="current-humidity">Wind {this.state.wind}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCurrent;
