import React, { Component } from "react";
import { Link } from "react-router-dom";
import Today from "./Today.js";
import Time from "./Time.js";
import Button from "./Button.js";

import "../styles/Sidebar.css";

// Sidebar component is called to set the sidebar.
class Sidebar extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      id: "5128581"
    };
  }

  render() {
    return (
      <div className="sidebar-outerframe">
        <div className="sidebar-todayPlustime-frame">
          <div className="sidebar-today-frame">
            <Today name="sidebar-today"/>
          </div>

          <div className="sidebar-time-frame">
    
            <Time name="sidebar-time"/>
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
