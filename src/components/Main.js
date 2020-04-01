import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

// import Ids from "../data/Ids_limit.js";
import WeatherCurrent from "./WeatherCurrent.js";
import Sidebar from "./Sidebar.js";
import WeatherForecast from "./WeatherForecast.js";
import Button from "./Button.js";

import "../styles/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: props.match.params.id,
      id: "5128581",
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
  };

  render() {
    return (
      <div>
        {/* <h1>MAIN </h1> */}

        <Route
          path="/"
          exact
          render={routerProps => <WeatherCurrent {...routerProps} />}
        />

        <Route
          path="/city/:id"
          exact
          render={routerProps => <WeatherForecast {...routerProps} />}
        />
      </div>
    );
  }
}
export default Main;
