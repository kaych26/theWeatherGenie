import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <Link to="/">
          <h2 className="header_home">HOME </h2>
        </Link>
      </nav>
      <h1 className="header_title">WEATHER GENIE</h1>
    </header>
  );
};

export default Header;
