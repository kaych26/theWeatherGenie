import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Ids from "../data/Id_NYC.js";
import "../styles/Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ids: Ids
    };
  }

  componentDidMount = async () => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <h1>SIDE BAR ====</h1>

        {this.state.Ids.map((id, idx) => (
         
          <Link to={`/city/${id.id}`}>
            <h3>
              {id.id} {id.name} {id.state} {id.country}
            </h3>
          </Link>
        ))}

      </div>
    );
  }
}
export default Sidebar;
