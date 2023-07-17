import React from "react"
import classNames from "classnames";
import "../styles/Attributes.css";

function Attributes() {

  const background = classNames('attribute-background');
  const title = classNames('title');

  const attributeContainer = classNames('attribute-container');
  const attributeBox = classNames('attribute-box');
  const strengthBullets = classNames('strength-bullets');

  return (
    <div className={background}>
      <h1 className={title}>My Strengths</h1>
      <div className={attributeContainer}>

        <div className={attributeBox}>
          <h2>Detail oriented / problem solving</h2>
          <p>Hot sexy talented permenant resident</p>
        </div>

        <div className={attributeBox}>
          <h2>User-centric approach</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adispsicng elit, sed do eiusmod tempo</p>
        </div>

        <div className={attributeBox}>
          <h2>Communication and Collaboration</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adispsicng elit, sed do eiusmod tempo</p>
        </div>
      </div>

      <div className={strengthBullets}>
        <ul>
          <li>Experienced in so many things...</li>
          <li>Proficient in ...</li>
          <li>Passion for ...</li>
          <li>Determined to ...</li>
        </ul>
      </div>
    </div>
  )
}

export default Attributes;