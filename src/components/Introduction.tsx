import React from "react"
import classNames from "classnames";
import "../styles/Introduction.css";

function Introduction() {

  const mainContainer = classNames('main-container');
  const introContainer = classNames('intro-container');
  const introCopy = classNames('intro-copy slide-in-left');
  const hiCharlie = classNames('hi-charlie');
  const highlight = classNames('highlight');

  const introPhoto = classNames('intro-photo slide-in-right');
  const iconContainer = classNames('icon-container');
  const wavyGraphic = classNames('wavy-graphic');


  return (
    <div className={mainContainer}>
      <div className={introContainer}>
        <div className={introCopy}>
          <div className={hiCharlie}>Hi I'm <span className={highlight}>Charlie</span></div>
          <p>
            Full stack developer in Vancouver with a passion for <strong>problem-solving</strong> and optimization.
            <br /><br />
            Since building my first website in 2020, I've honed my skills in building <strong>intuitive user interfaces</strong> and <strong>efficient applications</strong> using JavaScript, React, Express, NodeJS and more.
            <br /><br />
            With a background in Customer Experience, I bring a unique perspective to my software projects. From healthtech startups to e-commerce stores, I care about connecting people with services and technologies that will <strong>genuinely improve their lives.</strong>
          </p>
          <div className={iconContainer}>
            <a href="mailto:charlesmjchandler@gmail.com?subject=Nice to meet you!&amp;body=Hi Charlie,"><img src="icons/email.png" alt="email-icon"></img></a>
            <a href="https://www.linkedin.com/in/charlesmchandler/" target="_blank" rel="noreferrer"><img src="icons/linkedin.png" alt="linkedin-icon"></img></a>
            <a href="https://github.com/charlie-chandler" target="_blank" rel="noreferrer"><img src="icons/github.png" alt="github-icon"></img></a>
          </div>
        </div>
        <div className={introPhoto}>
          <img src="images/blob_and_photo2.png" alt="green-blob" className={introPhoto} />
        </div>
      </div>
      <img className={wavyGraphic} src="images/wavy-graphic.png" alt="beige wavy graphic"></img>
    </div>
  )
}

export default Introduction;