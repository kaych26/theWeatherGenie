import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Today from "./Today.js";
import Time from "./Time.js";

import Ids from "../data/Id_NYC.js";
import "../styles/Sidebar.css";
import Button from "./Button.js";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    const today = new Date().toLocaleString().split(",");
    this.state = {
      date: today[0],
      time: today[1],
      id: "5128581"
    };
  }

  componentDidMount = async () => {
    this.setState({});
  };

  render() {
    return (
      <div className="sidebar-outerframe">
        {/* <h3 className="sidebar-title">Current Temperature</h3> */}

        <div className="sidebar-todayPlustime-frame">
          <div className="sidebar-today-frame">
            <Today name="sidebar-today" date={this.state.date} />
          </div>

          <div className="sidebar-time-frame">
            <Time name="sidebar-time" time={this.state.time} />
          </div>
        </div>

        {/* <div> */}

        <div className="sidebar-button-today">
          <Link to="/">
            <Button name="button_temp" label="Today" />
          </Link>
        </div>

        <div className="sidebar-button">
          <Link to={`/city/${this.state.id}`}>
            <Button name="button_temp" label="Next 5 Days" />
          </Link>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
export default Sidebar;
