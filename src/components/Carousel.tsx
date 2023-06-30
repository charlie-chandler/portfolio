import React, { useEffect, useState } from "react"
import classNames from "classnames";
import "../styles/Carousel.css";

import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import SliderWindow from "./SliderWindow";

const len = SliderWindow.length - 1;

function Carousel(props: any) {

  const background = classNames('projects-background');
  const title = classNames('title');

  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  return (
    <div className={background}>
      <h1 className={title}>My Projects</h1>
      <p>Click on any project for more details</p>
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={SliderWindow} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={SliderWindow}
          onclick={(activeIndex: any) => setActiveIndex(activeIndex)}
        />
      </div>

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

export default Carousel;