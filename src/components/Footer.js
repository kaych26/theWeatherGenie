import React, { Component } from "react";
import FooterLogo from "./FooterLogo.js";

const today = new Date().toLocaleString().split(",");
const year = today[0].split("/");

const Footer = () => {
  return <FooterLogo name="footer_logo" year={year[2]} />;
};

export default Footer;
