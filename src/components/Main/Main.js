import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

// import Ids from "../../data/Ids_limit.js";
import Weather from "../Weather/Weather.js";
import Sidebar from "../Sidebar/Sidebar.js";
import WeatherDetail from "../WeatherDetail/WeatherDetail.js";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: props.match.params.id,
      // id: "5128581",
      results: [],
      results_5days: [],
      weather: [],
      main: [],
      unit: "F",

      daily: {}
    };
  }

  componentDidMount = async () => {
    const KEY = "f0722d727f4810c1e22014a286bc361e";
    const nycId = "5128581";
    const unit = "imperial";

    const API = `https://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&units=${unit}&appid=${KEY}`;
    const API2 = `https://api.openweathermap.org/data/2.5/forecast?id=${this.state.id}&units=${unit}&appid=${KEY}`;
    // api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={your api key}

    // const resp = await axios(API);
    // const resp_5days = await axios(API2);

    this.setState({});
    // debugger
  };

  render() {
    return (
      <div>
        <h1>MAIN </h1>
        <Route
          path="/city/:id"
          exact
          render={routerProps => <Weather {...routerProps} />}
        />

        <Route
          path="/city/:id"
          exact
          render={routerProps => <WeatherDetail {...routerProps} />}
        />
      </div>
    );
  }
}
export default Main;
