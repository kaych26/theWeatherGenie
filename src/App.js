import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Sidebar from "./components/Sidebar.js";
import Ids from "./data/Id_NYC.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ids: [],
      Id: ""
    };
  }

  componentDidMount = async () => {
    this.setState({
      Ids: Ids,
    });
  };

  render() {
    return (
      <div>
        <Route path="/" render={routerProps => <Header />} />
        <Route path="/" render={routerProps => <Sidebar />} />

        <Route
          path="/"
          render={routerProps => <Main {...routerProps} />}
        />

        <Route path="/" render={routerProps => <Footer />} />
      </div>
    );
  }
}
export default App;
