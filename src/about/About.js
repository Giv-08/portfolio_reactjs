import React, { Component } from "react";
import Avatar from "../assets/avatar2.png";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
  render() {
    return (
    <>
      <Avatar page="about" />
      <AboutMenu />
    </>
  )
  }
}
