import React from "react"
import classNames from "classnames";
import "../styles/Introduction.css";

function Introduction() {

  const mainContainer = classNames('main-container');
  const introContainer = classNames('intro-container');
  const introCopy = classNames('intro-copy');
  const hiCharlie = classNames('hi-charlie');
  const highlight = classNames('highlight');
  const introPhoto = classNames('intro-photo');
  const iconContainer = classNames('icon-container');



  return (
    <div className={mainContainer}>
      <div className={introContainer}>
        <div className={introCopy}>
          <div className={hiCharlie}>Hi I'm <span className={highlight}>Charlie</span></div>
          <p>
            A full stack developer in Vancouver, BC.
            <br />
            I'm ambitious, curious and enthusiastic.
            <br />
            Let's connect.
          </p>
        </div>
        <div className={introPhoto}>
          <img src="images/blob_and_photo2.png" alt="green-blob" className={introPhoto} />
        </div>
      </div>
      <div className={iconContainer}>
        <a href="mailto:charlesmjchandler@gmail.com?subject=Nice to meet you!&amp;body=Hi Charlie,"><img src="icons/email.png" alt="email-icon"></img></a>
        <a href="https://www.linkedin.com/in/charlesmchandler/" target="_blank" rel="noreferrer"><img src="icons/linkedin.png" alt="linkedin-icon"></img></a>
        <a href="https://github.com/charlie-chandler" target="_blank" rel="noreferrer"><img src="icons/github.png" alt="github-icon"></img></a>
      </div>
      <img src="images/wavy-graphic.png" alt="beige wavy graphic"></img>
    </div>
  )
}

export default Introduction;