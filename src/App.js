import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Sidebar from "./components/Sidebar.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="whole-frame">
        <Route path="/" render={routerProps => <Header />} />

        <div className="body-frame">
          <div className="sidebar-frame">
            <Route path="/" render={routerProps => <Sidebar />} />
          </div>

          <div className="main-frame">
            <Route path="/" render={routerProps => <Main {...routerProps} />} />
          </div>
        </div>

        <div className="footer-frame">
          <Route path="/" render={routerProps => <Footer />} />
        </div>
      </div>
    );
  }
}
export default App;
