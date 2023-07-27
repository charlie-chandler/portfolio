import React from "react"
import classNames from "classnames";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";

function TopNav() {

  const topNavCharlie = classNames("nav-charlie");
  const topNavChandler = classNames("nav-chandler");
  const topNavLinks = classNames("nav-links");
  const navAnchorClass = classNames("nav-anchors");
  const resumeButtonClass = classNames("nav-resume-btn");


  return (
    <nav>
      <Link to="/#top">
        <div className={topNavCharlie} >CHARLIE</div>
        <div className={topNavChandler}>CHANDLER</div>
      </Link>
      <div className={topNavLinks} id="navLinks">
        <Link to="/#about" className={navAnchorClass}>About</Link>
        <Link to="/#projects" className={navAnchorClass}>Projects</Link>
        <Link to="/#skills" className={navAnchorClass}>Skills</Link>
        <Link to="/#contact" className={navAnchorClass}>Contact</Link>
        <a href="https://drive.google.com/file/d/19CjSNIQ9QFCpoGkjMhpbP_tag8le6yti/view?usp=share_link" target="_blank" rel="noreferrer" className={resumeButtonClass}>Resumé</a>
      </div>
    </nav>
  )
}

export default TopNav;