import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/avatar4.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
    <div className="avatar-container">
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </div>
    </>
  );
};
// to make sure the data you receive is valid
Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
