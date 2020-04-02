import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../styles/Header.css";
import Title from "./Title.js";

// render the header using storybook component
const Header = () => {
  return (
    <header className="header">
      <div className="header_title">
        <Title title ="WEATHER GENIE"/>
            </div>
    </header>
  );
};

export default Header;
