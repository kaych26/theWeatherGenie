import React, { Component } from "react";
import axios from "axios";
import "../styles/WeatherCurrent.css";

// WeatherCurrent component will call API and render the current weather data.

// Last minute change to use this API because the previous API was using insecure http
// and unable to deploy to Netifly.  However, my site lost the weather icon...initially thought
// this API has the icons, but not for free account

class WeatherCurrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: props.homepage,
      results: [],
      city_name: "",
      local_time: "",
      current_temp: 0,
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
    // Parameters used to call the Weatherbit API - today's weather
    const KEY = "135c1b8ccc544d6f953f021df2c4b756";
    const API = `https://api.weatherbit.io/v2.0/current?city=New York,NY&units=I&key=135c1b8ccc544d6f953f021df2c4b756`;
    const resp = await axios(API);

    debugger;
    this.setState(() => ({
      results: resp.data,
      city_name: resp.data.data[0].city_name,
      local_time: resp.data.data[0].datetime,
      current_temp: resp.data.data[0].temp,
      current_feelsLike: resp.data.data[0].app_temp,
      humidity: resp.data.data[0].rh,
      weather_icon: resp.data.data[0].weather_icons,
      weather_desc: resp.data.data[0].weather.description,
      wind: resp.data.data[0].wind_spd,
      precip: resp.data.data[0].precip,
      is_day: resp.data.data[0].pod
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
            <h3 className="current-temp">
              {parseFloat(this.state.current_temp).toFixed()}&deg; F
            </h3>
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
            <h3 className="current-wind">Wind: {this.state.wind} mph</h3>
            <h3 className="current-desc">Sky: {this.state.weather_desc}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCurrent;
