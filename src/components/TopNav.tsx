import React from "react"
import classNames from "classnames";
import "../styles/TopNav.scss";

function TopNav() {

  const topNavClass = classNames("top-nav");
  const navAnchorClass = classNames("nav-anchors");

  return (
    <nav>
      <div>CHARLIE CHANDLER</div>
      <div>
      <a href="/about" className="navAnchorClass">About</a>
      <a href="/projects" className="navAnchorClass">Projects</a>
      <a href="/skills" className="navAnchorClass">Skills</a>
      <a href="/contact" className="navAnchorClass">Contact</a>
      <a href="https://flowcv.com/resume/uc0n7klepo" className="navAnchorClass">Resumé</a>
      </div>
    </nav>
  )
}

export default TopNav;