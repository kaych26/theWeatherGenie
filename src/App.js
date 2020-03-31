import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Ids from "../src/data/Ids_limit.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ids: []
    };
  }

  componentDidMount = async () => {

    this.setState({
      Ids: Ids
    });
  };

  render() {
    return (
      <div>
        <Route path="/" render={routerProps => <Header />} />
        <Route path="/" render={routerProps => <Sidebar />} />

        {/* {this.state.Ids.map((id, idx) => (
          <Link to={`/city/${id.id}`}>
            <h3>
              {id.id} {id.name} {id.state} {id.country}
            </h3>
          </Link>
        ))} */}

       
        <Route path="/" render={routerProps => <Main {...routerProps}/>} />

        <Route path="/" render={routerProps => <Footer />} />
      </div>
    );
  }
}
export default App;
