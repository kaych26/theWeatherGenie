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
    const API = "https://api.openweathermap.org/data/2.5/forecast?id=5128581&units=imperial&appid=f0722d727f4810c1e22014a286bc361e";
    const resp = await axios(API);

    // Parameters used to call the Weatherbit API - today's weather
    // Last minute change to use this API because the previous API was using insecure http
    // and unable to deploy to Netifly.  However, my site lost the weather icon...initially thought
    // this API has the icons, but not for free account
    const KEY_weatherbit = "135c1b8ccc544d6f953f021df2c4b756";
    const API_current = `https://api.weatherbit.io/v2.0/current?city=New York,NY&units=I&key=135c1b8ccc544d6f953f021df2c4b756`;
    const resp_current = await axios(API_current);

    // storing the API result data to this.state
    this.setState({
      results: resp.data.list,
      weather: resp.data.weather,
      main: resp.data.main,
      current_results: resp_current.data,
      current_city: resp_current.data.data[0].city_name,
      current_temp: resp_current.data.data[0].temp,
      current_feelsLike: resp_current.data.data[0].app_temp,
      current_img: resp_current.data.data[0].weather_icons

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
              {parseFloat(this.state.current_temp).toFixed()}&deg; F
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
