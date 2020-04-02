import React, { Component } from "react";
import axios from "axios";
import "../styles/WeatherForecast.css";

// WeatherForecast will call API and render today and next 5 days weather data.
class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_results: [],
      current_city: "",
      current_temp: "",
      current_img: "",
      results: [],
      weather: [],
      main: []
    };
  }
  componentDidMount = async () => {
    //Parameters used to call the OpenWeathermap API - 5 days forecast
    const KEY = "f0722d727f4810c1e22014a286bc361e";
    const nycId = "5128581";
    const unit = "imperial";
    const zip = "10010";
    const API = `https://api.openweathermap.org/data/2.5/forecast?id=${nycId}&units=${unit}&appid=${KEY}`;

    // Parameters used to call the Weatherstack API - today's weather
    // const KEY_weatherstack = "a34416af42ea074efad5ada5656f6164";
    const KEY_weatherstack = "1d5857743783fad0dbc744550e4f26df";
    const unit_weatherstack = "f";

    const API_current = `http://api.weatherstack.com/current?access_key=${KEY_weatherstack}&query=${zip}&units=${unit_weatherstack}`;

    const resp_current = await axios(API_current);
    const resp = await axios(API);

    // storing the API result data to this.state
    this.setState({
      results: resp.data.list,
      weather: resp.data.weather,
      main: resp.data.main,
      current_results: resp_current.data,
      current_city: resp_current.data.location.name,
      current_temp: resp_current.data.current.temperature,
      current_feelsLike: resp_current.data.current.feelslike,
      current_img: resp_current.data.current.weather_icons[0]
    });
  };
  render() {
    return (
      // rendering today's weather.
      <div>
        <div className="weatherForecast-current-frame">
          <div className="weatherForecast-city">{this.state.current_city}</div>

          <div className="weatherForecast-icontemp">
            <img
              className="weatherForecast-weather-icon"
              src={this.state.current_img}
            />
            <div className="weatherForecast-current-temp">
              {this.state.current_temp}&deg; F
            </div>
          </div>
        </div>

        {/* rendering next 5 days forecast */}
        {/* API data comes back with multiple weather data for each day, */}
        {/* filtered only using the 00:00 weather data for each day */}
        <div className="weatherForecast-outerframe">
          {this.state.results
            .filter(oneTemp => oneTemp.dt_txt.includes(" 00:00"))
            .map((each, idx) => (
              <div key={idx} className="forecast-frame">
                {/* <div className="forecast-frame"> */}
                <div className="forecast-date">
                  {each.dt_txt.substring(5, 10)}
                </div>
                <div className="forecast-temp">
                  {each.main.temp.toFixed()}&deg; F
                </div>
                <div className="forecast-feelslike">
                  Feels: {each.main.feels_like.toFixed()}&deg; F
                </div>

                {each.weather.map((sky, idx) => (
                  <div key={idx}>
                    <div className="forecast-sky"> {sky.main}</div>
                  </div>
                ))}
                {/* </div> */}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default WeatherForecast;
