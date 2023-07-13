import React from "react"
import classNames from "classnames";
import "../styles/TopNav.css";

function TopNav() {

  const topNavCharlie = classNames("nav-charlie");
  const topNavChandler = classNames("nav-chandler");
  const topNavLinks = classNames("nav-links");
  const navAnchorClass = classNames("nav-anchors");
  const resumeButtonClass = classNames("nav-resume-btn");


  return (
    <nav>
      <div className={topNavCharlie}>CHARLIE</div>
      <div className={topNavChandler}>CHANDLER</div>
      
      <div className={topNavLinks} id="navLinks">
        <a href="/about" className={navAnchorClass}>About</a>
        <a href="/projects" className={navAnchorClass}>Projects</a>
        <a href="/skills" className={navAnchorClass}>Skills</a>
        <a href="/contact" className={navAnchorClass}>Contact</a>
        <a href="https://flowcv.com/resume/uc0n7klepo" target="_blank" rel="noreferrer" className={resumeButtonClass}>Resumé</a>
      </div>
    </nav>
  )
}

export default TopNav;