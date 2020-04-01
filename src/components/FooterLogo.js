import React from "react";
import "../styles/FooterLogo.css";

const FooterLogo = props => (
  <small className={props.name}>&copy; {props.year} KayC Inc.</small>
);

export default FooterLogo;
