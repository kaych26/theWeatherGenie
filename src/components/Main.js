import React from "react";
import { Route } from "react-router-dom";
import WeatherCurrent from "./WeatherCurrent.js";
import WeatherForecast from "./WeatherForecast.js";
import "../styles/Main.css";

// Main() is used to route the homepage and the 
// weather 5 days forcast page.

function Main() {
  return (
    <div className="main-weathercurrent-outerframe">

      {/* Homepage: WeatherCurrent component */}
      <Route
        path="/"
        exact
        render={routerProps => <WeatherCurrent {...routerProps} />}
      />

      {/* 5 Days forecast: WeatherForecast component */}
      <div className="main-weatherforecast-outerframe">
        <Route
          exact
          path="/city/:id"
          exact
          render={routerProps => <WeatherForecast {...routerProps} />}
        />
      </div>
    </div>
  );
}
export default Main;
