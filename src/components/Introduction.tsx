import React from "react"
import classNames from "classnames";
import "../styles/Introduction.css";

function Introduction() {

  const introContainer = classNames('intro-container');
  const introCopy = classNames('intro-copy');
  const hiCharlie = classNames('hi-charlie');
  const highlight = classNames('highlight');
  const introPhoto = classNames('intro-photo');


  return (
    <div>
      <div className={introContainer}>
        <div className={introCopy}>
          <div className={hiCharlie}>Hi I'm <span className={highlight}>Charlie</span></div>
          <p>
            A full stack developer in Vancouver, BC.
            <br />
            I'm ambitious, curious and enthusiastic.
            <br />
            If I can offer any value to you - feel free to get in touch.
          </p>
        </div>
        <div className={introPhoto}>
          <img src="images/blob_and_photo2.png" alt="green-blob" className={introPhoto} />
        </div>
      </div>
    </div>
  )
}

export default Introduction;
