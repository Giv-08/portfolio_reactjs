import React from "react";
import "../styles/contactIcons.css";
import linkedin from "../assets/linkedin_logo.png";
import github from "../assets/github-logo.png";
import codepen from "../assets/codepen-logo.png";

const ContactIcons = () => {
  return (
    <div className="icons-box">
      <div className="social-icons">
        <img className="social-icon linkedin" url="https://www.linkedin.com/in/chutima-puthachon-a42012284" src={linkedin} target="_blank" alt="linkedin"/>
        <img className="social-icon github" src={github} url="https://github.com/Giv-08" target="_blank" alt="github"/>
        <img className="social-icon codepen" src={codepen} url="https://codepen.io/MALICIPE" target="_blank" alt="codepen"/>
      </div>
    </div>
  );
};

export default ContactIcons;
