import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../styles/Header.css";
import Title from "./Title.js";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="header_nav"> */}
       

      <div className="header_title">
      {/* <div className="header_title">WEATHER GENIE</div> */}
        <Title title ="WEATHER GENIE"/>
            </div>
    </header>
  );
};

export default Header;
