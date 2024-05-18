import React from "react";
import "../styles/background.css";
import video from "../assets/galaxy_2.mp4";
import backgroundFallback from "../assets/background_fallback.png"

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video playsInline autoPlay muted loop preload="auto" poster={backgroundFallback} id="bg">
      <source src={video} type="video/mp4"></source></video>
    </>
  );
};

export default Background;
