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
      <h1 className={title}>What I Bring To My Work</h1>
      <div className={attributeContainer}>

        <div className={attributeBox}>
          <h2>Detail oriented</h2>
          <p>Nothing makes me happier than dotting the i’s and crossing the t’s.
            <br />
            <br />
            I have a keen eye for detail that translates well to writing and testing code, as well as understanding project requirements and debugging those nitty-gritty problems.</p>
        </div>

        <div className={attributeBox}>
          <h2>Unique user-centric approach</h2>
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