import React, { useState} from "react"
import classNames from "classnames";
import "../styles/TopNav.css";
// @ts-ignore 
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function TopNav() {

  const [isMenuOpen, setIsMenuOpen]  = useState(false);

  const topNavCharlie = classNames("nav-charlie");
  const topNavChandler = classNames("nav-chandler");
  const topNavLinks = classNames("nav-links", { "responsive": isMenuOpen });
  const navAnchorClass = classNames("nav-anchors");
  const resumeButtonClass = classNames("nav-resume-btn");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Clicked!");
  };

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

        <a href="#" className="menu-icon" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#FFFFFF"}}/></a>

        <div className={`dropdown ${isMenuOpen ? 'open' : ''}`}>
          <HashLink to="/#about" className={navAnchorClass}>About</HashLink>
          <HashLink to="/#projects" className={navAnchorClass}>Projects</HashLink>
          <HashLink to="/#skills" className={navAnchorClass}>Skills</HashLink>
          <HashLink to="/#contact" className={navAnchorClass}>Contact</HashLink>
          <a href="https://drive.google.com/file/d/19CjSNIQ9QFCpoGkjMhpbP_tag8le6yti/view?usp=share_link" target="_blank" rel="noreferrer" className={resumeButtonClass}>Resumé</a>
        </div>
      </div>
    </nav>
  )
}

export default TopNav;