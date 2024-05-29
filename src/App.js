import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About.js";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
import Intro from "./intro/Intro.js";
import "./styles/app.css"
import Background from "./background/Background.js";

const App = () => {
  return(
  <Router>
    <Nav />
    <Background />
    <Routes>
      {/* The path is a path pattern. When the path pattern matches the current URL, the element will be rendered. */}
      <Route path="/" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Intro />
  </Router>
  );
};

export default App;
