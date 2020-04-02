import React from "react";
import "../styles/Today.css";

const Today = props => (
  <div className={props.name} >{props.date}
  </div>
);

export default Today;
