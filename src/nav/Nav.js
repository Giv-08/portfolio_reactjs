import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronaut from "../assets/astronaut2.png";
import satellite from "../assets/satellite2.png";
import cosmonaut from "../assets/cosmonaut.png";
import tools from "../assets/tools.png";
import "../styles/nav.css";

export default function Nav() {
  // This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes
  const location = useLocation();
// classes to define page paths
  const getNavPositionClass = () => {
    // The path of the current URL
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} className="icons"/>
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

    return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", astronaut, "astronault icon", "nav-about")}
      {renderNavLink("/skills", tools, "tools icon", "nav-skills")}
      {renderNavLink("/projects", cosmonaut, "cosmonaut icon", "nav-projects")}
      {renderNavLink("/contact", satellite, "satellite icon", "nav-contact")}
    </nav>
    );
  }
