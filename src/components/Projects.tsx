import React from "react"
import classNames from "classnames";
import "../styles/Projects.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

function Projects() {

  const background = classNames('projects-background');
  const title = classNames('title');
  const carousel = classNames('carousel');


  return (
    <div className={background}>
      <h1 className={title}>My Projects</h1>
      <p>Click on any project for more details</p>
      <div className={carousel}>
        <Splide aria-labelledby="My Favorite Images">
          <SplideSlide>
            <img src="icons/js.png" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="icons/react.png" alt="Image 2" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default Projects;