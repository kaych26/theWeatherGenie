import React, { Component } from "react";
import { Route, Link } from "react";
import axios from "axios";

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
          .filter(oneTemp => ( oneTemp.dt_txt.includes(" 15:")))
          .map((each, idx) => (
            <div key={idx}>
              {/* const day={each.dt_txt}.substr(0,9) */}
              {/* <h3>Date {each.dt_txt}</h3> */}
              <h3>Date {each.dt_txt}</h3>
              <h3> Temp {each.main.temp}</h3>
              <h3> Lo {each.main.temp_min}</h3>
              <h3> Hi {each.main.temp_max}</h3>

              {each.weather.map((sky, idx) => (
                <div key={idx}>
                  <h3> Sky {sky.main}</h3>
                </div>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default WeatherForecast;
