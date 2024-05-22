import React from "react";
import ContactMenu from "./ContactMenu";
import AvatarMail from "../avatar/AvatarMail";
import ContactIcons from "../contact/ContactIcons";
import "../styles/contact.css"

const Contact = () => {
  return (
    <>
      <AvatarMail />
      <ContactMenu />
      <ContactIcons />
    </>
  );
};

export default Contact;
