import React, { Component } from "react";
import ProjectMenu from "./projectMenu";
import Avatar2 from "../avatar/Avatar2.js";

export default class Projects extends Component {
  render() {
    return (
    <>
    <Avatar2 page="projects" />
    <ProjectMenu />
    </>
    );
  }
}
