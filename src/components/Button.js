import React from "react";
import "../styles/Button.css";

// create button with different label
const Button = props => <button className={props.name}>{props.label}</button>;

export default Button;
