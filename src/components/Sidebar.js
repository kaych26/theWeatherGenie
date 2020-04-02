import React, { Component } from "react";
import { Link } from "react-router-dom";
import Today from "./Today.js";
import Time from "./Time.js";

import "../styles/Sidebar.css";
import Button from "./Button.js";

// Sidebar component is called to set the sidebar.
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

  render() {
    return (
      <div className="sidebar-outerframe">

        <div className="sidebar-todayPlustime-frame">
          <div className="sidebar-today-frame">
            <Today name="sidebar-today" date={this.state.date} />
          </div>

          <div className="sidebar-time-frame">
            <Time name="sidebar-time" time={this.state.time} />
          </div>
        </div>

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
      </div>
    );
  }
}
export default Sidebar;
