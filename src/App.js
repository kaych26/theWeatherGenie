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
      <div className="app-whole-frame">
        <Route path="/" render={routerProps => <Header />} />

        <div className="app-body-frame">
          <div className="sidebar-frame">
            <Route path="/" render={routerProps => <Sidebar />} />
          </div>

          <div className="app-main-frame">
            <Route path="/" render={routerProps => <Main {...routerProps} />} />
          </div>
        </div>

        <div className="app-footer-frame">
          <Route path="/" render={routerProps => <Footer />} />
        </div>
      </div>
    );
  }
}
export default App;
