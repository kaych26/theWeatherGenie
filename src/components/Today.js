import React from "react";
import "../styles/Today.css";

// creating label with today's date only
const date = new Date().toLocaleString().split(",");
const today = date[0];

const Today = props => <div className={props.name}>{today}</div>;

export default Today;
