import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="header_nav"> */}
        {/* <Link to="/">
          <div className="header_home">HOME </div>
        </Link> */}
      {/* </div> */}

      <div></div>
      <div className="header_title">WEATHER GENIE</div>
    </header>
  );
};

export default Header;
