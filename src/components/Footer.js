import React, { Component } from "react";
import FooterLogo from "./FooterLogo.js";
import "../styles/Footer.css";

// const today = new Date().toLocaleString().split(",");
// const year = today[0].split("/");

const Footer = () => {
  return (
    <div className="footer-frame">
      <FooterLogo name="footer_logo"/>
    </div>
  )
}

export default Footer;
