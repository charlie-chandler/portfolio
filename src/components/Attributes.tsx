import React from "react"
import classNames from "classnames";
import "../styles/Attributes.css";

function Attributes () {

  const background = classNames('attribute-background');
  const title = classNames('title');

  const attributeContainer = classNames('attribute-container');
  const attributeBox = classNames('attribute-box');

  return (
    <div className={background}>
      <h1 className={title}>My Strengths</h1>
      <div className={attributeContainer}>

        <div className={attributeBox}>
          <h2>Attribute 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adispsicng elit, sed do eiusmod tempo</p>
        </div>
        
        <div className={attributeBox}>
          <h2>Attribute 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adispsicng elit, sed do eiusmod tempo</p>
        </div>

        <div className={attributeBox}>
          <h2>Attribute 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adispsicng elit, sed do eiusmod tempo</p>
        </div>

      </div>
    </div>
  )
}

export default Attributes;