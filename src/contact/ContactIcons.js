import React from "react";
import "../styles/contactIcons.css";
import linkedin from "../assets/linkedin_logo.png";
import github from "../assets/github-logo.png";
import codepen from "../assets/codepen-logo.png";

const ContactIcons = () => {
  return (
    <div className="icons-box">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chutima-puthachon-a42012284" target="_blank" rel="noreferrer"><img className="social-icon linkedin" src={linkedin} alt="linkedin"/></a>
        <a href="https://github.com/Giv-08" target="_blank" rel="noreferrer"><img className="social-icon github" src={github} alt="github"/></a>
        <a href="https://codepen.io/MALICIPE" target="_blank" rel="noreferrer"><img className="social-icon codepen" src={codepen} alt="codepen"/></a>
      </div>
    </div>
  );
};

export default ContactIcons;
