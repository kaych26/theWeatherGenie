import React from "react";
import "../styles/FooterLogo.css";

const FooterLogo = props => (
  <small className={props.name}>
    Copyright &copy; {props.year} KayC Inc. All Rights Reserved.
  </small>
);

export default FooterLogo;
