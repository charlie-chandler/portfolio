import React from "react"
import classNames from "classnames";
import "../styles/Projects.css";
// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css/core';

function Projects() {

  const background = classNames('projects-background');
  const title = classNames('title');
  // const carousel = classNames('carousel splide');
  // const track = classNames('splide__track');
  // const list = classNames('splide__list');
  const slide = classNames('splide__slide');
  const wrapper = classNames('custom-wrapper');


  return (
    <div className={background}>
      <h1 className={title}>My Projects</h1>
      <p>Click on any project for more details</p>

      {/* <Splide aria-label="My Carousel" hasTrack={false}>
        <div className={wrapper}>
          <SplideTrack>
            <SplideSlide className={slide}>
              <img src="images/mojo_panel.png" alt="Mojo website" />
            </SplideSlide>
            <SplideSlide className={slide}>
              <img src="images/scheduler_panel.png" alt="Scheduler website" />
            </SplideSlide>
            <SplideSlide className={slide}>
              <img src="images/jungle_panel.png" alt="Jungle website" />
            </SplideSlide>
            <SplideSlide className={slide}>
              <img src="images/tweeter_panel.png" alt="Tweeter website" />
            </SplideSlide>
          </SplideTrack>
        </div>
      </Splide> */}

      
    </div>
  )
}

export default Projects;