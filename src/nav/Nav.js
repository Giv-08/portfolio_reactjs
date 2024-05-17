import React, { Component } from "react";
import { Link, useLocation } from "react-router";
import astronault from "../assets/astronaut.png";
import "../styles/nav.css";

export default class Nav extends Component {
  render() {
    return (
    <div>
      <img src={astronault} />
    </div>
    );
  }
}
