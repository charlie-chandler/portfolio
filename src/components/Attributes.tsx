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
          <h2>Detail oriented</h2>
          <p>I have a keen eye for detail so I am able to meticulously review code, understand the nuances of project requirements, and test/debug to resolve technical issues of varying difficulty.</p>
        </div>

        <div className={attributeBox}>
          <h2>User-centric approach</h2>
          <p>My background in client-facing roles has given me great insight into the user's experience and perspective which I can apply to my coding.</p>
        </div>

        <div className={attributeBox}>
          <h2>Communication and Collaboration</h2>
          <p>My 3+ years of experience in CX has taught me how to communicate clearly and effectively across many different teams.  </p>
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