import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount = async () => {
    const KEY = "f0722d727f4810c1e22014a286bc361e";
    const nycId = "5128581";
    const API = `https://api.openweathermap.org/data/2.5/weather?id=${nycId}&appid=${KEY}`;

    const resp = await axios(API);

    this.setState({
      results: resp
    });
    console.log(resp);
    // console.log(`RESULTS:  ${resp}`);
    // debugger;
  };
  // end componentDidMount()

  render() {
    return <div>hello </div>;
  }
}
export default App;
