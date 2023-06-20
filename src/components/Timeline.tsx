import React from "react"
import classNames from "classnames";
import "../styles/Timeline.css";

function Timeline() {

  const background = classNames('background');
  const title = classNames('title');
  const timeline = classNames('timeline');

  const textBox = classNames('text-box');
  const leftContainer = classNames('container', 'left-container');
  const rightContainer = classNames('container', 'right-container');
  const leftContainerArrow = classNames('left-container-arrow');
  const rightContainerArrow = classNames('right-container-arrow');


  return (
    <div className={background}>
      <h1 className={title}>How did I get here?</h1>
      <div className={timeline}>
        
        <div className={leftContainer}>
          <img src="images/lhl_circle.png" alt="lhl circle" />
          <div className={textBox}>
            <h2>Lighthouse Labs</h2>
            <small>2023</small>
                    {/* Maybe these could be bullet points instead of p tags? */}
            <p>Decided to pursue my passion of being a software developer and succesfully completed the full-time Web Development Diploma at Lighthouse Labs. </p>
            <span className={leftContainerArrow}></span>
          </div>
        </div>

        <div className={rightContainer}>
        <img src="images/health_tech_circle.png" alt="health tech circle" />
          <div className={textBox}>
            <h2>Telus Health MyCare</h2>
            <small>2020 - 2022</small>
            <p>(Formerly Babylon Health) Worked at health tech startup doing technical support for patients.</p>
            <span className={rightContainerArrow}></span>
          </div>
        </div>

        <div className={leftContainer}>
        <img src="images/hot_dog_circle.png" alt="hot dog circle" />
          <div className={textBox}>
            <h2>My Dine Out Diary</h2>
            <small>2020</small>
            <p>Built my first website to track details of my favourite food experiences in Vancouver using HTML and CSS. </p>
            <span className={leftContainerArrow}></span>
          </div>
        </div>

        <div className={rightContainer}>
        <img src="images/ubc_circle.png" alt="UBC circle" />
          <div className={textBox}>
            <h2>University of British Columbia</h2>
            <small>2015</small>
            <p>Moved to Canada to complete my BA. <br/> Fell in love with the country and began a new chapter of my life that would last for 8 years (so far!) </p>
            <span className={rightContainerArrow}></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Timeline; 