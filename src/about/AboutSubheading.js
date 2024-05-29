import React from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";

const AboutSubheading = ({title, content, active, onClick, menuItem}) => {
// render subheading data
  const subContainerClass = `sub-container-${menuItem}`;
  return(
    <div className={classNames(subContainerClass, {"active-subheading": active})}>
    <h2 onClick={onClick} className="title">{title}</h2>
    <div className="p-container">{content}</div>
    </div>
  );
};

export default AboutSubheading;
