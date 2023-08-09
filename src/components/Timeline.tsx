import React from "react"
import classNames from "classnames";
import "../styles/Timeline.css";

function Timeline() {

  const background = classNames('background');
  const title = classNames('title', 'timeline-title');
  const timeline = classNames('timeline');

  const textBox = classNames('text-box');
  const leftContainer = classNames('container', 'left-container');
  const rightContainer = classNames('container', 'right-container');
  const leftContainerArrow = classNames('left-container-arrow');
  const rightContainerArrow = classNames('right-container-arrow');


  return (
    <div className={background}>
      <h1 className={title}>How did I get here?</h1>
      <div className={timeline} id="about">

        <div className={leftContainer}>
          <img src="images/lhl_circle.png" alt="lhl circle" />
          <div className={textBox}>
            <h2>Lighthouse Labs</h2>
            <small>2023</small>
            <p>After 3+ years of tech support and ops, I decided to pursue my passion and learn how to build the software I was already helping patients to understand.
            </p>
            <ul>
              <li>Completed the full-time Web Development Diploma at Lighthouse Labs.</li>
              <li>Learned to build end-to-end web applications in collaboration with other devs (click <strong>Skills</strong> up top ⬆️ for full stack info)</li>
              <li>The third, most important secret of what I learned goes here.</li>
            </ul>
            <span className={leftContainerArrow}></span>
          </div>
        </div>

        <div className={rightContainer}>
          <img src="images/health_tech_circle.png" alt="health tech circle" />
          <div className={textBox}>
            <h2>Telus Health MyCare</h2>
            <small>2020 - 2022</small>
            <p>Joined health tech startup (formerly Babylon Health) providing technical support for patients.</p>
            <ul>
              <li>Provided clear and compassionate technical support to 110,000+ patients to ensure a smooth user experience.</li>
              <li>Maintained robust safeguarding procedures to uphold the security of sensitive patient data.</li>
              <li>Stayed up-to-date with the rapidly evolving virtual healthcare environment and quickly learning new technologies to effectively support and collaborate with medical staff.</li>
            </ul>
            <span className={rightContainerArrow}></span>
          </div>
        </div>

        <div className={leftContainer}>
          <img src="images/hot_dog_circle.png" alt="hot dog circle" />
          <div className={textBox}>
            <h2>Chandler's Food Van</h2>
            <small>2020</small>
            <p>Built my first website to track details of my favourite food experiences in Vancouver. </p>
            <ul>
              <li>Had some time during lockdown so learnt how to build a basic site using HTML and CSS.</li>
              <li>It was not very good! But I loved discovering how creative coding is, and the experience stuck with me.</li>
              <li>Taught me that I should outsource my marketing because this name is cheesy 😅.</li>
            </ul>
            <span className={leftContainerArrow}></span>
          </div>
        </div>

        <div className={rightContainer}>
          <img src="images/ubc_circle.png" alt="UBC circle" />
          <div className={textBox}>
            <h2>University of British Columbia</h2>
            <small>2015</small>
            <p>Moved to Canada to complete my BA. </p>
            <ul>
              <li>Majored in Psychology. Courses include: research methods, decision making, linguistics, behavioural psychology, statistics, neuroscience, business strategy, and innovation in business.</li>
              <li>Fell in love with the country and began a new chapter of my life that would last for 8 years (and counting!)</li>
            </ul>
            <span className={rightContainerArrow}></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Timeline; 