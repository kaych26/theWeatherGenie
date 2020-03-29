import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Weather from "./components/Weather/Weather.js";

import "./App.css";

class App extends Component {

  // componentDidMount = async () => {
  //   const KEY = "f0722d727f4810c1e22014a286bc361e";
  //   const nycId = "5128581";
  //   const API = `https://api.openweathermap.org/data/2.5/weather?id=${nycId}?&appid=${KEY}`;

  //   const resp = await axios(API);

  //   this.setState({
  //     results: resp
  //   });
  //   console.log(resp);

  // };

  render() {
    return (
      <div>
        <Route path="/" exact render={routerProps => <Header />} />
        <Route path="/" exact render={routerProps => <Weather />} />
        
        <Route path="/" exact render={routerProps => <Footer />} />
      </div>
    );
  }
}
export default App;
