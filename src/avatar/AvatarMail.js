import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/mail_space2.png";
import "../styles/avatar.css";

const AvatarMail = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
    <div className="avatar-container-mail">
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </div>
    </>
  );
};
// to make sure the data you receive is valid
AvatarMail.propTypes = {
  page: PropTypes.string.isRequired,
};

export default AvatarMail;
