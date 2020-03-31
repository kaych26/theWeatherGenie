import React, { Component } from "react";
import { Route, Link } from "react";
import axios from "axios";

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
      weather_icon: ""
      
    };
  }
  
     
      componentDidMount = async () => {
        // const KEY = "f0722d727f4810c1e22014a286bc361e";
        const KEY = "a34416af42ea074efad5ada5656f6164";
        const nycId = "5128581";
        // const unit = "imperial";
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
          weather_icon: resp.data.current.weather_icons[0]
        });
        // debugger

    
  };

  render() {
    return (
      <div>
        <h1> I AM IN Weather NOW NOW</h1>

        <h3>{this.state.city_name}</h3>
        <h3>Temp {this.state.current_temp}</h3>
        <h3>Feels {this.state.current_feelsLike}</h3>
        <h3>Humidity {this.state.humidity}</h3>
        <img src={this.state.weather_icon} />
      </div>
    );
  }

 
}

export default WeatherCurrent;
