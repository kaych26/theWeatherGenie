import React, { Component } from "react";

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
        <Header />

        <div className="app-body-frame">
          <div className="sidebar-frame">
            <Sidebar />
          </div>

          <div className="app-main-frame">
            <Main />
          </div>
        </div>

        <div className="app-footer-frame">
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
