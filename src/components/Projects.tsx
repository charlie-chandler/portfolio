import React from "react"
import classNames from "classnames";
import "../styles/Projects.css";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

function Projects() {

  const background = classNames('projects-background');
  const title = classNames('title');
  const carousel = classNames('carousel splide');
  const track = classNames('splide__track');
  const list = classNames('splide__list');
  const slide = classNames('splide__slide');




  return (
    <div className={background}>
      <h1 className={title}>My Projects</h1>
      <p>Click on any project for more details</p>
      <section className={carousel} id="image-carousel" aria-label="Website panel images">
        <div className={track}>
          <ul className={list}>
            <li className={slide}>
              <img src="image01.jpg" alt=""/>
            </li>
            <li className={slide}>
              <img src="image02.jpg" alt=""/>
            </li>
            <li className={slide}>
              <img src="image03.jpg" alt=""/>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Projects;