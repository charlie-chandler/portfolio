import React from "react"
import classNames from "classnames";
import "../styles/Projects.css";

function Projects() {

  const background = classNames('projects-background');
  const title = classNames('title');
  const carousel = classNames('carousel');


  return (
    <div className={background}>
      <h1 className={title}>My Projects</h1>
      <p>Click on any project for more details</p>
      <div className={carousel}>
      </div>
    </div>
  )
}

export default Projects;