import React, { Components } from "react";
import "../styles/Time.css";

// create label with current times
const date = new Date().toLocaleString().split(",");
const todayTime = date[1];
const Time = props => <div className={props.name}>{todayTime}</div>;

export default Time;
