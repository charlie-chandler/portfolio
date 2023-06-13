import React from "react"
import classNames from "classnames"

function TopNav() {

  const topNavClass = classNames("top-nav");

  return (
    <nav>
      <div>CHARLIE CHANDLER</div>
      <a href="/about" className="topNavClass">About</a>
      <a href="/projects" className="topNavClass">Projects</a>
      <a href="/skills" className="topNavClass">Skills</a>
      <a href="/contact" className="topNavClass">Contact</a>
      <a href="https://flowcv.com/resume/uc0n7klepo" className="topNavClass">Resumé</a>

    </nav>
  )
}

export default TopNav;