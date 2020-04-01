import React from "react";
import "../styles/Button.css";

const Button = props => <button className={props.name}>{props.label}</button>;

export default Button;
