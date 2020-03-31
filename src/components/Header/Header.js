import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <h2>HOME </h2>
        </Link>
      </nav>
      <h1>WEATHER GENIE</h1>
    </header>
  );
};

export default Header;
