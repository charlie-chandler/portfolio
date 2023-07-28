import React from "react"
import classNames from "classnames";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";
// @ts-ignore 
import { HashLink } from "react-router-hash-link";


function TopNav() {

  const topNavCharlie = classNames("nav-charlie");
  const topNavChandler = classNames("nav-chandler");
  const topNavLinks = classNames("nav-links");
  const navAnchorClass = classNames("nav-anchors");
  const resumeButtonClass = classNames("nav-resume-btn");


  return (
    <nav>
      <HashLink to="/#top">
        <div className={topNavCharlie} >CHARLIE</div>
        <div className={topNavChandler}>CHANDLER</div>
      </HashLink>
      <div className={topNavLinks} id="navLinks">
        <HashLink to="/#about" className={navAnchorClass}>About</HashLink>
        <HashLink to="/#projects" className={navAnchorClass}>Projects</HashLink>
        <HashLink to="/#skills" className={navAnchorClass}>Skills</HashLink>
        <HashLink to="/#contact" className={navAnchorClass}>Contact</HashLink>
        <a href="https://drive.google.com/file/d/19CjSNIQ9QFCpoGkjMhpbP_tag8le6yti/view?usp=share_link" target="_blank" rel="noreferrer" className={resumeButtonClass}>Resumé</a>
      </div>
    </nav>
  )
}

export default TopNav;