import React from "react"
import classNames from "classnames";
import "../styles/TopNav.css";

function TopNav() {

  const topNavCharlie = classNames("nav-charlie");
  const topNavLinks = classNames("nav-links");
  const navAnchorClass = classNames("nav-anchors");
  const resumeButtonClass = classNames("nav-resume-btn");


  return (
    <nav>
      <div className={topNavCharlie}>CHARLIE CHANDLER</div>
      <div className={topNavLinks} id="navLinks">
      <a href="/about" className={navAnchorClass}>About</a>
      <a href="/projects" className={navAnchorClass}>Projects</a>
      <a href="/skills" className={navAnchorClass}>Skills</a>
      <a href="/contact" className={navAnchorClass}>Contact</a>
      <a href="https://flowcv.com/resume/uc0n7klepo" className={resumeButtonClass}>Resumé</a>
      </div>
    </nav>
  )
}

export default TopNav;