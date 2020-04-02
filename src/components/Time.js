import React, { Components } from "react";
import "../styles/Time.css";

const date = new Date().toLocaleString().split(",");
const todayTime = date[1];
const Time = props => <div className={props.name}>{todayTime}</div>;

export default Time;
