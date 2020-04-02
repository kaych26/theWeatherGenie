import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import WeatherCurrent from "./WeatherCurrent.js";
import WeatherForecast from "./WeatherForecast.js";

import "../styles/Main.css";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentResult: []
  //   };
  // }

  componentDidMount = async () => {
    // const KEY = "a34416af42ea074efad5ada5656f6164";
    // const nycId = "5128581";
    // const unit = "f";
    // const API = `http://api.weatherstack.com/current?access_key=${KEY}&query=10010&units=${unit}`;
    // const resp = await axios(API);
    // debugger;
    // this.setState({
    //   currentResults: resp.data
    // });
    
  };

  render() {
  
    return (
      <div>
        <Route
          path="/" exact
          render={routerProps => <WeatherCurrent {...routerProps} />}
        />
        <div>
          <Route exact
            path="/city/:id"
            exact
            render={routerProps => <WeatherForecast {...routerProps} />}
          />
        </div>
      </div>
    );
  }
}
export default Main;
