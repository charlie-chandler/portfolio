import React from "react"
import classNames from "classnames";
import "../styles/Attributes.css";

function Attributes() {

  const background = classNames('attribute-background');
  const title = classNames('title');

  const attributeContainer = classNames('attribute-container');
  const attributeBox = classNames('attribute-box grow');

  return (
    <div className={background}>
      <h1 className={title}>What I Bring To My Work</h1>
      <div className={attributeContainer}>

        <div className={attributeBox}>
          <h2>Meticulous with details</h2>
          <p>Nothing makes me happier than dotting the i’s and crossing the t’s.
            <br /><br />
            I have a keen eye for detail that translates well to writing and testing code, as well as understanding project requirements and debugging those nitty-gritty problems.</p>
        </div>

        <div className={attributeBox}>
          <h2>Unique approach</h2>
          <p>My background in client-facing roles has given me direct insight into the types of problems faced by users.
          <br /><br />
          My ability to understand their perspective is a key tool in creating useful products that benefit the user.
          </p>
        </div>

        <div className={attributeBox}>
          <h2>Effective communication</h2>
          <p>Look, I know everyone says this one, but my years in CX genuinely taught me how to communicate clearly. 
          <br /><br />
          Knowing when to ask what questions, or when it's necessary to provide clarification, help create a more enjoyable team dynamic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Attributes;