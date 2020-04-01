import React, { Component } from "react";
import { Route, Link } from "react";
import axios from "axios";
import "../styles/WeatherForecast.css";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      results: [],
      weather: [],
      main: [],
      unit: "F"
    };
  }

  componentDidMount = async () => {
    // const KEY = "a34416af42ea074efad5ada5656f6164";
    const KEY = "f0722d727f4810c1e22014a286bc361e";
    const nycId = "5128581";
    const unit = "imperial";
    const zip = "10010";
    const forecast_days = "5";
    const hourly = "24";

    // const API = `http://api.weatherstack.com/forecast?access_key=${KEY}&query=New York City&units=${unit}&hourly=3`;
    const API = `https://api.openweathermap.org/data/2.5/forecast?id=${this.state.id}&units=${unit}&appid=${KEY}`;

    const resp = await axios(API);

    this.setState({
      results: resp.data.list,
      weather: resp.data.weather,
      main: resp.data.main
    });

    // debugger;
  };

  render() {
    return (
      <div className="weatherForecast-outerframe">
        {/* <h1> I AM IN DETAIL Weather </h1> */}
        {/* {this.state.results.map((each, idx) => ( */}

        {this.state.results
          .filter(oneTemp => oneTemp.dt_txt.includes(" 00:00"))
          .map((each, idx) => (
            <div key={idx} className="forecast-frame">
              {/* <div className="forecast-frame"> */}
              <div className="forecast-date">
                {each.dt_txt.substring(5, 10)}
              </div>
              <div className="forecast-temp">{each.main.temp}&deg; F</div>
              <div className="forecast-feelslike">
                Feels: {each.main.feels_like}&deg; F
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
    );
  }
}

export default WeatherForecast;
