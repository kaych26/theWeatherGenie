import React from "react";
import "../styles/FooterLogo.css";

// create copyright with current year
const today = new Date().toLocaleString().split(",");
const year = today[0].split("/");

const FooterLogo = props => (
  <small className={props.name}>
    Copyright &copy; {year[2]} KayC Inc. All Rights Reserved.
  </small>
);

export default FooterLogo;
